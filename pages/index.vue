<template>
    <div>
        <Hero />
        <div class="pt-56 lg:pt-48 pb-32 px-2 md:px-4 xl:px-8 text-center text-4xl leading-tight tag-line">
            Frontend Developer:<br class="md:hidden"> Driven by passion...<br class="lg:hidden"> Fueled by coffee.
        </div>
        <!-- <no-ssr> -->
        <Bio />
        <!-- </no-ssr> -->
        <Gallery ref="gallery" />
    </div>
</template>

<script>
import Hero from '~/components/Hero'
import Bio from '~/components/Bio'
import Gallery from '~/components/Gallery'

export default {
  name: 'HomePage',

  components: {
    Hero,
    Bio,
    Gallery
  },

  mounted() {
    const scrollTo = this.$route.query.goTo
    if (scrollTo && this.$refs[scrollTo]) {
      const section = this.$refs[scrollTo].$el
      const target = section.offsetTop + 150

      window.setTimeout(() => {
        window.scrollTo({ top: target, behavior: 'smooth' })
        this.$router.replace({ name: this.$route.name, query: null })
      },100)
    }
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


