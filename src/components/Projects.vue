<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <h1>个人项目</h1>
            </v-col>
            <v-col cols="12" class="carousel">
                <v-carousel hide-delimiter-background>
                    <v-carousel-item v-for="(item, index) in projects" :key="index" class="item">
                        <a :href="item.url" target="_blank" class="projectTitle">
                            {{ item.title }}
                        </a>
                        <div class="content">{{ item.content }}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MyProjects",
    data() {
        return {
            projects: [
                {
                    title: "项目1",
                    content: "项目1的介绍",
                    url: "https://example.com"
                },
                {
                    title: "项目2",
                    content: "项目2的介绍",
                    url: "https://example.com"
                },
                {
                    title: "项目3",
                    content: "项目3的介绍",
                    url: "https://example.com"
                }
            ]
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
    border-bottom: 2px darkslategray solid;
}

.projectTitle:hover {
    color: #9f3;
    border-bottom-color: #9f3;
}
</style>