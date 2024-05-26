<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <v-img id="avatar" :src="avatarUrl" max-width="150" aspect-ratio="1" class="mx-auto" contain></v-img>
            </v-col>
            <v-col cols="12">
                <h1 class="name">{{ name }}</h1>
            </v-col>
            <v-col cols="12">
                <div class="subTitle">
                    {{ bio }}
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "AboutMe",
    data() {
        return {
            name: process.env.VUE_APP_NAME || "Scars",
            bio: '',   // GitHub用户简介
            avatarUrl: ''  // GitHub用户头像
        };
    },
    mounted() {
        this.fetchGithubInfo();
    },
    methods: {
        async fetchGithubInfo() {
            const username = process.env.VUE_APP_GITHUB_USERNAME || "CN-Scars";
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`);
                this.bio = response.data.bio;
                this.avatarUrl = response.data.avatar_url;
            } catch (error) {
                console.error('Error fetching GitHub data:', error);
                // 处理错误，如显示错误消息
            }
        }
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #22c3aa 0%, #00BCD4 100%);
}

#avatar {
    border: 10px solid #aee2d9;
    border-radius: 50%;
}

.name {
    font-family: 'Lobster', cursive;
    font-size: 2.5rem;
    color: #ffffff;
    margin-top: 10px;
}

.subTitle {
    color: #aee2d9;
    font-size: 1.2rem;
    padding: 0 2rem;
    text-align: center;
}
</style>