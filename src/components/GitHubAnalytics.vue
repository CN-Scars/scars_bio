<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>⚙️ GitHub Analytics</h1>
            </v-col>
            <v-col cols="12">
                <p align="center">
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
            username: process.env.VUE_APP_GITHUB_USERNAME || "CN-Scars"
        };
    }
};
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #19078ad7 0%, #33b0ee 100%);
}

h1 {
    margin-bottom: 20px;
    color: #333;
}

p {
    display: flex;
    justify-content: center;
    align-items: center;
}

img {
    margin: 0 10px;
}
</style>