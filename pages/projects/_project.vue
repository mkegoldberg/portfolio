<template>
    <div>
        <div class="flex flex-col md:flex-row container pt-4 md:py-4 px-2 md:px-4">
            <div class="hidden md:flex w-1/5 items-center">
                <img
                    :src="project.thumbnailPath"
                    class="rounded-full mx-auto img-thumb"
                >
            </div>
            <div class="flex w-full md:w-4/5 md:pl-8 justify-around">
                <div class="self-center flex-1">
                    <h1 class="text-2xl md:text-3xl lg:text-5xl tracking-wide fade-left">
                        {{ project.title }}
                    </h1>
                </div>
            </div>
        </div>
        <div class="container px-2 md:px-4">
            <div class="border-b border-grey-darker mb-2 title-container" />
            <nuxt-link 
                to="/#gallery"
                class="no-underline text-blue hover:text-blue-light"
            >
                <no-ssr>
                    <font-awesome-icon
                        :icon="['fas', 'long-arrow-alt-left']"
                        class="mr-2"
                    />
                </no-ssr>
                Back to Recent Projects
            </nuxt-link>
        </div>

        <div class="py-4 md:py-8 max-w-md mx-auto px-2 md:px-4">
            <no-ssr>
                <Carousel
                    v-if="showCarousel"
                    :auto-play="true"
                    :autoplay-hover-pause="true"
                    :per-page="1"
                    :navigation-enabled="true"
                    :loop="true"
                >
                    <Slide
                        v-for="(img, index) in project.images"
                        :key="index"
                    >
                        <img 
                            :src="img"
                            class=""
                        >
                    </Slide>
                </Carousel>
            </no-ssr>
        </div>

        <div class="flex content-start flex-wrap container py-4 px-2 md:px-4">
            <span 
                v-for="tech in project.techUsed"
                :key="tech"
                class="bg-blue-lighter text-white text-center text-sm rounded-full p-2 w-24 mr-2 mb-2 md:mb-0"
            >
                {{ tech }}
            </span>
        </div>

        <div class="py-4 md:py-8 px-4 container description">
            <div
                class="leading-normal"  
                v-html="project.description"
            />
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import Vue from "vue";
import { mapGetters } from "vuex";
export default {
    name: 'ProjectItem',
    components: {
        FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(module => module.FontAwesomeIcon),
        Carousel: () => import('vue-carousel').then(module => module.Carousel),
        Slide: () => import('vue-carousel').then(module => module.Slide),
    },
    data() {
        return {
            showCarousel: false
        }
    },
    computed:{
        ...mapGetters({ projectName: "projectName" }),
        convertUrlParam(){
            return this.$route.params.project.toLowerCase()
                .split('-')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join('');
        },
        project() {
            return this.projectName(
                this.convertUrlParam
            )
        }

    },
    mounted() {
        this.showCarousel = true
    }
}
</script>
<style scoped>
h1 {
  opacity: 0;
  animation: fade-in-right ease-out .5s forwards;
}
.img-thumb {
    max-width: 8rem;
    opacity: 0;
    animation: fade-in-bottom ease-out .5s forwards;
}
.title-container {
    transform: scaleX(0);
    transform-origin: left;
    animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;
}
.VueCarousel {
    max-width: 600px;
}
</style>


