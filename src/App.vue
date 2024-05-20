<template>
    <v-app>
        <v-main>
            <!-- 使用 router-view 显示路由匹配的组件 -->
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',
}
</script>