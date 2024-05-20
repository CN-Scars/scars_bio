<template>
    <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-avatar size="200px">
                    <v-img src="../assets/logo.png"></v-img>
                </v-avatar>
                <h1 class="text-center">Scars</h1>
                <div class="text-center subtitle-1">简介</div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #22c3aa;
}

#avatar {
    width: 200px;
    height: 200px;
    border: 10px solid #aee2d9;
    border-radius: 50%;
}

.subTitle {
    color: #aee2d9;
    font-size: 1.4rem;
    padding: 0 2rem;
    text-align: center;
}
</style>