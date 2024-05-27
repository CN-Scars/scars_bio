<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>个人项目</h1>
            </v-col>
            <v-col cols="12" class="carousel">
                <v-carousel hide-delimiter-background v-if="!isLoading">
                    <v-carousel-item v-for="(item, index) in projects" :key="index" class="item">
                        <a :href="item.url" target="_blank" class="projectTitle">
                            {{ item.title }}
                        </a>
                        <div class="content">{{ item.content }}</div>
                    </v-carousel-item>
                </v-carousel>
                <v-progress-circular v-else indeterminate color="primary"></v-progress-circular>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'; // 引入 axios 库来处理 HTTP 请求

export default {
    name: "MyProjects",
    data() {
        return {
            projects: [], // 初始为空，等待API填充
            isLoading: true // 加载状态指示
        }
    },
    mounted() {
        this.fetchGitHubProjects();
    },
    methods: {
        async fetchGitHubProjects() {
            const username = process.env.VUE_APP_GITHUB_USERNAME; // 从环境变量中获取GitHub用户名
            const url = `https://api.github.com/users/${username}/repos`; // 构建GitHub API请求URL

            try {
                const response = await axios.get(url); // 发送HTTP请求获取项目数据
                this.projects = response.data.map(repo => ({
                    title: repo.name,
                    content: repo.description || '无描述', // 如果没有描述，则显示默认文本
                    url: repo.html_url
                }));
            } catch (error) {
                console.error('GitHub API 请求失败:', error); // 请求失败时输出错误信息
            } finally {
                this.isLoading = false; // 完成加载，无论成功或失败
            }
        }
    }
}
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #00BCD4 0%, #054b85 100%);
    overflow: auto;
    padding: 2rem;
    /* 添加填充以确保内容不靠近边缘 */
}

.carousel {
    width: 100%;
    margin-top: 1rem;
}

.item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    /* 改为auto以实现响应式布局 */
    min-height: 200px;
    /* 设置最小高度 */
    padding: 1rem;
}

.content {
    text-align: center;
    margin: 1rem;
    font-size: 1rem;
    /* 调整字体大小以便在较小屏幕上更易阅读 */
    color: #f5f5f5;
    word-wrap: break-word;
    /* 添加自动换行 */
    word-break: break-word;
    /* 添加自动换行 */
}

.projectTitle {
    transition: all 300ms;
    font-size: 1.5rem;
    /* 调整字体大小以便在较小屏幕上更易阅读 */
    color: darkslategrey;
    border-bottom: 2px darkslategray solid;
    word-wrap: break-word;
    /* 添加自动换行 */
    word-break: break-word;
    /* 添加自动换行 */
}

.projectTitle:hover {
    color: #9f3;
    border-bottom-color: #9f3;
}

/* 在屏幕宽度达到600px时调整样式 */
@media (min-width: 600px) {
    .content {
        font-size: 1.25rem;
    }

    .projectTitle {
        font-size: 2rem;
    }
}

/* 在屏幕宽度达到960px时调整样式 */
@media (min-width: 960px) {
    .content {
        font-size: 1.5rem;
        margin: 1rem 3.5rem;
    }

    .projectTitle {
        font-size: 2.5rem;
    }
}
</style>