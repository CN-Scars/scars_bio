<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>⚙️ GitHub Analytics</h1>
            </v-col>
            <v-col cols="12">
                <p align="center" class="github-stats">
                    <a :href="`https://github.com/${username}`">
                        <img height="180em"
                            :src="`https://github-readme-stats-eight-theta.vercel.app/api?username=${username}&show_icons=true&theme=algolia&include_all_commits=true&count_private=true`" />
                        <img height="180em"
                            :src="`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${username}&layout=compact&langs_count=8&theme=algolia`" />
                    </a>
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "GitHubAnalytics",
    data() {
        return {
            username: process.env.VUE_APP_GITHUB_USERNAME // 从环境变量中获取GitHub用户名
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

.github-stats {
    display: flex;
    flex-wrap: wrap;
    /* 启用换行 */
    justify-content: center;
    /* 在主轴上居中 */
    align-items: center;
    /* 在交叉轴上居中 */
}

.github-stats img {
    margin: 0.5rem;
    /* 添加间距以防止图片紧贴 */
    max-width: 100%;
    /* 确保图片在小屏幕上不会超出容器宽度 */
    flex: 1 1 180px;
    /* 确保图片具有相对固定的最小宽度，并允许换行 */
}

@media (max-width: 600px) {
    .github-stats img {
        height: 150px;
        /* 在小屏幕上调整图片高度 */
    }
}

@media (min-width: 960px) {
    .github-stats img {
        height: 180px;
        /* 在大屏幕上恢复图片高度 */
    }
}
</style>