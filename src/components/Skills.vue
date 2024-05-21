<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>🛠 Tech Stack</h1>
            </v-col>
            <v-col cols="12">
                <v-row class="skills" justify="center">
                    <v-col v-for="(item, index) in skills" :key="index" class="word" cols="auto">
                        <img :src="item.url" :alt="item.name" class="skill-image" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "MySkills",
    data() {
        return {
            skills: []
        };
    },
    mounted() {
        this.fetchSkills();
    },
    methods: {
        async fetchSkills() {
            try {
                const username = 'CN-Scars';
                const repo = 'CN-Scars';
                const path = 'README.md';
                const url = `https://raw.githubusercontent.com/${username}/${repo}/main/${path}`;

                const response = await axios.get(url);
                const markdownContent = response.data;
                this.extractSkills(markdownContent);
            } catch (error) {
                console.error('Error fetching skills:', error);
            }
        },
        extractSkills(markdownContent) {
            const techStackSection = markdownContent.split('### 🛠 &nbsp;Tech Stack')[1];
            const skillImages = techStackSection.match(/!\[.*?\]\((.*?)\)/g) || [];
            this.skills = skillImages.map(img => {
                const url = img.match(/\((.*?)\)/)[1];
                const name = img.match(/\[([^\]]*)\]/)[1];
                return { name, url };
            });
        }
    }
};
</script>

<style scoped>
.root {
    background-color: #22c3aa;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 0 1rem;
    margin-top: 10px;
}

.word {
    background-color: #00796b;
    color: #f3f3f3;
    border-radius: 5px;
    padding: 5px 10px;
    margin: 5px;
}

.skill-image {
    max-width: 100px;
    max-height: 30px;
}

/* 响应式图片大小 */
@media only screen and (max-width: 768px) {
    .skill-image {
        max-width: 80px;
        max-height: 24px;
    }
}

@media screen and (min-width: 769px) {
    .skill-image {
        max-width: 120px;
        max-height: 36px;
    }
}
</style>