<template>
    <div>
        <div class="flex flex-col md:flex-row container pt-4 md:py-4 px-2 md:px-4">
            <div class="hidden md:block pr-8">
                <img
                    :src="selectedProject.thumbnailPath"
                    height="75"
                    width="75"
                    class="rounded-full img-thumb"
                >
            </div>
            <div class="flex flex-1 justify-around">
                <div class="self-center flex-1">
                    <h1 class="text-2xl md:text-4xl lg:text-5xl tracking-wide">
                        {{ selectedProject.title }}
                    </h1>
                    <div class="gallery-link">
                        <nuxt-link
                            v-if="nav.prev"
                            to="/?goTo=gallery"
                            class="no-underline text-blue hover:text-blue-light text-sm"
                        >
                            View all projects
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container px-2 md:px-4">
            <div class="border-b border-grey-darker mt-2 md:mt-0 mb-2 title-container" />
            <div class="flex justify-between flex-wrap">
                <nuxt-link
                    v-if="nav.prev"
                    :to="nav.prev.link"
                    class="no-underline text-blue hover:text-blue-light"
                >
                    <no-ssr>
                        <font-awesome-icon
                            :icon="['fas', 'long-arrow-alt-left']"
                            class="mr-2"
                        />
                    </no-ssr>
                    {{ nav.prev.label }}
                </nuxt-link>
                <nuxt-link
                    v-else
                    to="/?goTo=gallery"
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

                <nuxt-link
                    v-if="nav.next"
                    :to="nav.next.link"
                    class="no-underline text-blue hover:text-blue-light"
                >
                    {{ nav.next.label }}
                    <no-ssr>
                        <font-awesome-icon
                            :icon="['fas', 'long-arrow-alt-right']"
                            class="ml-2"
                        />
                    </no-ssr>
                </nuxt-link>
            </div>
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
                        v-for="(img, index) in selectedProject.images"
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
                v-for="tech in selectedProject.techUsed"
                :key="tech"
                class="bg-blue-lighter text-white text-center text-sm rounded-full p-2 w-24 mr-2 mb-2 md:mb-0"
            >
                {{ tech }}
            </span>
        </div>

        <div class="pb-4 md:pb-8 px-4 container description">
            <div
                class="leading-normal"
                v-html="selectedProject.description"
            />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: 'ProjectPage',

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
        ...mapState(["selectedProject", "portfolioItems"]),
        nav () {
          const items = Object.values(this.portfolioItems)
          const currentIndex = items.findIndex((item) => item.path === this.selectedProject.path)

          const prev = currentIndex === 0
            ? null
            : { label: items[currentIndex - 1].title, link: items[currentIndex - 1].path}

          const next = currentIndex === items.length - 1
            ? null
            : { label: items[currentIndex + 1].title, link: items[currentIndex + 1].path}
          return {
            prev: prev,
            next: next
          }
        }
    },

    fetch({store, params,}) {
        let formatted = params.project.toLowerCase()
                .split('-')
                .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                .join('');
        store.dispatch("fetchSelectedProject", formatted);
    },

    mounted() {
        this.showCarousel = true
    },

    head () {
      return {
        title: this.selectedProject.title
      }
    }
}
</script>
<style scoped>
h1,
.gallery-link {
  opacity: 0;
  animation: fade-in-right ease-out .5s forwards;
}
.img-thumb {
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
@media screen and (max-width: 39.9375em) {
    .VueCarousel {
        overflow: hidden;
    }
}
</style>


