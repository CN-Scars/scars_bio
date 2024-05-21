<template>
    <v-container class="root fill-height" fluid>
        <v-row align="center" justify="center" class="text-center">
            <v-col cols="12">
                <v-img id="avatar" src="@/assets/scars_logo.png" max-width="150" aspect-ratio="1" class="mx-auto"
                    contain></v-img>
            </v-col>
            <v-col cols="12">
                <h1 class="name">Scars</h1>
            </v-col>
            <v-col cols="12">
                <div class="subTitle">
                    Scars的简介
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "AboutMe",
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #22c3aa;
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
    /* margin-top: 10px; */
}
</style>