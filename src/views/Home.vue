<template>
    <v-container class="pa-0 fill-height" fluid>
        <v-window direction="vertical" v-model="currentComponent" class="swipe" vertical
            reverse-transition="slide-y-reverse-transition" transition="slide-y-transition">
            <v-window-item v-for="(component, index) in components" :key="index" class="window-item">
                <component :is="component" class="component"></component>
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script>
import AboutMe from '../components/AboutMe.vue';
import Skill from '../components/Skills.vue';
import Projects from '../components/Projects.vue';

export default {
    name: 'HomePage',
    components: {
        AboutMe,
        Skill,
        Projects,
    },
    data() {
        return {
            components: ['AboutMe', 'Skill', 'Projects'],
            currentComponent: 0,
            lock: false,
        };
    },
    methods: {
        onScroll(event) {
            if (this.lock) {
                return;
            }
            const delta = event.wheelDelta || -event.detail;
            this.lock = true;
            if (delta > 0 && this.currentComponent > 0) {
                this.currentComponent--;
            } else if (delta < 0 && this.currentComponent < this.components.length - 1) {
                this.currentComponent++;
            }
            setTimeout(() => {
                this.lock = false;
            }, 600); // 设置600ms过渡时间
        },
    },
    mounted() {
        document.body.onmousewheel = this.onScroll;
    },
    beforeUnmount() {
        document.body.onmousewheel = null;
    },
};
</script>

<style scoped>
.swipe {
    height: 100%;
    width: 100%;
}

.window-item {
    height: 100%;
}

.component {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.slide-y-transition-enter-active,
.slide-y-transition-leave-active {
    transition: transform 0.6s ease;
}

.slide-y-transition-enter,
.slide-y-transition-leave-to {
    transform: translateY(100%);
}

.slide-y-transition-leave,
.slide-y-transition-enter-to {
    transform: translateY(0);
}

.slide-y-reverse-transition-enter-active,
.slide-y-reverse-transition-leave-active {
    transition: transform 0.6s ease;
}

.slide-y-reverse-transition-enter,
.slide-y-reverse-transition-leave-to {
    transform: translateY(-100%);
}

.slide-y-reverse-transition-leave,
.slide-y-reverse-transition-enter-to {
    transform: translateY(0);
}
</style>