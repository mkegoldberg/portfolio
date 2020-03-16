<template>
    <section
        id="gallery"
        class="py-24"
    >
        <div class="container">
            <h3 class="pb-6 font-normal text-center text-4xl tracking-wide">
                My Projects
            </h3>
            <div class="md:flex md:content-start md:flex-wrap">
                <div
                    v-for="(item, title) in portfolioItems"
                    :key="title"
                    class="md:w-1/3 p-4"
                >
                    <div class="text-grey-darker text-center">
                        <nuxt-link :to="item.path">
                            <img
                                :src="item.thumbnailPath"
                                :alt="item.title"
                                class="grow mb-4"
                            >
                        </nuxt-link>
                        <div>
                            {{ item.title }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from "vuex"

export default {
    computed: {
        ...mapState(["portfolioItems"])
    }
}
</script>
