<template>
    <section class="py-32 bg-blue-lighter text-white">
        <div class="container tracking-wide px-4 md:px-8">
            <h3 class="pb-6 font-normal text-center text-4xl">
                A Little About Me
            </h3>
            <div class="py-10 flex flex-col md:flex-row">
                <no-ssr>
                    <div class="md:w-1/3 text-center">
                        <font-awesome-layers class="text-10xl hover:text-red">
                            <font-awesome-icon 
                                :icon="['fas', 'circle']"
                            />
                            <font-awesome-icon 
                                :icon="['fas', 'paint-brush']"
                                class="text-red hover:text-white"
                                transform="shrink-8"
                            />
                        </font-awesome-layers>
                        <div class="text-3xl font-medium pt-4">
                            I Design
                        </div>
                    </div>
                    <div class="md:w-1/3 text-center py-16 md:py-0">
                        <font-awesome-layers class="text-10xl hover:text-red">
                            <font-awesome-icon 
                                :icon="[&quot;fas&quot;, &quot;circle&quot;]"
                            />
                            <font-awesome-icon
                                :icon="[&quot;fas&quot;, &quot;code&quot;]"
                                class="text-red code-icon hover:text-white" 
                                transform="shrink-8"
                            />
                        </font-awesome-layers>
                        <div class="text-3xl font-medium pt-4">
                            I Develop
                        </div>
                    </div>
                    <div class="md:w-1/3 text-center">
                        <font-awesome-layers class="text-10xl hover:text-red">
                            <font-awesome-icon 
                                :icon="[&quot;fas&quot;, &quot;circle&quot;]"
                            />
                            <font-awesome-icon
                                :icon="['fas', 'address-book']"
                                class="text-red hover:text-white"
                                transform="shrink-8"
                            />
                        </font-awesome-layers>
                        <div class="text-3xl font-medium pt-4">
                            Let's Connect
                        </div>
                    </div>
                </no-ssr>
            </div>
            <p class="text-xl leading-normal text-justify">
                Over the last fifteen years I have held various positions ranging from sales/account management to project management. My knack for organization and follow through has allowed me to excel in my previous positions, but in the last 5 years, I have steered in a different direction and honed my technical skills in visual design and web development. My passion truly lies in front end web development and I find gratification in producing a polished and functional web application. For the past two years I have been focusing on creating Vue.js applications using the Nuxt.js framework for a travel company that aggregates leads for travel agents. I take every project as an opportunity to refresh my methods and hone my practice in JavaScript.
            </p>
        </div>
    </section>
</template>

<script>
// import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome'
export default {
    components: {
        FontAwesomeIcon: () => import('@fortawesome/vue-fontawesome').then(module => module.FontAwesomeIcon),
        FontAwesomeLayers: () => import('@fortawesome/vue-fontawesome').then(module => module.FontAwesomeLayers),
    }
}
</script>

<style scoped>
.code-icon {
    left: -10px!important;
}
</style>


