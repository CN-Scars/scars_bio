<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>个人项目</h1>
            </v-col>
            <v-col cols="12" class="carousel">
                <v-carousel v-if="projects.length" hide-delimiter-background>
                    <v-carousel-item v-for="(item, index) in projects" :key="index" class="item">
                        <a :href="item.url" target="_blank" class="projectTitle">
                            {{ item.title }}
                        </a>
                        <div class="content">{{ item.content }}</div>
                    </v-carousel-item>
                </v-carousel>
                <div v-else>加载中...</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { request, gql } from 'graphql-request';

export default {
    name: "MyProjects",
    data() {
        return {
            projects: []
        }
    },
    async mounted() {
        try {
            const token = process.env.VUE_APP_GITHUB_TOKEN; // 从.env文件中获取GitHub Token
            const username = process.env.VUE_APP_GITHUB_USERNAME;   // 从.env文件中获取GitHub用户名

            const endpoint = 'https://api.github.com/graphql';
            const query = gql`
                query($username: String!) {
                    user(login: $username) {
                        pinnedItems(first: 10, types: REPOSITORY) {
                            nodes {
                                ... on Repository {
                                    name
                                    description
                                    url
                                }
                            }
                        }
                    }
                }
            `;
            const variables = { username };

            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const response = await request(endpoint, query, variables, headers);

            this.projects = response.user.pinnedItems.nodes.map(repo => ({
                title: repo.name,
                content: repo.description,
                url: repo.url
            }));
        } catch (error) {
            console.error('Error fetching pinned repositories:', error);
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
    background-color: #00BCD4;
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
    text-decoration: none;
    position: relative;
}

.projectTitle::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 2px;
    background-color: darkslategray;
    transition: all 300ms;
}

.projectTitle:hover {
    color: #9f3;
}

.projectTitle:hover::after {
    background-color: #9f3;
}
</style>