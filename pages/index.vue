<template>
    <div class="text-grey-darkest font-sans">
        <Hero />
        <div class="pt-48 pb-32 px-2 md:px-4 xl:px-8 text-center text-4xl tag-line">
            Front End Developer. Driven by passion.<br class="lg:hidden"> Fueled by coffee.
        </div>
        <!-- <no-ssr> -->
        <Bio />
        <!-- </no-ssr> -->
        <Gallery />
    </div>
</template>

<script>
import Hero from '~/components/Hero'
import Bio from '~/components/Bio'
import Gallery from '~/components/Gallery'

export default {
  components: {
    Hero,
    Bio,
    Gallery
  }
}
</script>

<style>
h1 {
  opacity: 0;
  animation: fade-in-right ease-out .8s forwards;
}
.img-container {
    opacity: 0;
    animation: fade-in-bottom ease-out .8s forwards;
}
.tag-line {
    opacity: 0;
    animation: fade-in-left ease-out 1s forwards;
}
</style>


