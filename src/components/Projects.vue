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
                <v-progress-circular v-else indeterminate color="primary"></v-progress-circular> <!-- 加载指示器 -->
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
            const username = process.env.VUE_APP_GITHUB_USERNAME;
            const url = `https://api.github.com/users/${username}/repos`;

            try {
                const response = await axios.get(url);
                this.projects = response.data.map(repo => ({
                    title: repo.name,
                    content: repo.description || '无描述', // 如果没有描述，则显示默认文本
                    url: repo.html_url
                }));
            } catch (error) {
                console.error('GitHub API 请求失败:', error);
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
    height: 360px;
    /* 固定高度 */
}

.content {
    text-align: center;
    margin: 1rem 3.5rem;
    font-size: 1.5rem;
    color: #f5f5f5;
}

.projectTitle {
    transition: all 300ms;
    font-size: 2.5rem;
    color: darkslategrey;
    border-bottom: 2px darkslategray solid;
}

.projectTitle:hover {
    color: #9f3;
    border-bottom-color: #9f3;
}
</style>