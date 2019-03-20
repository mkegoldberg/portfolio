<template>
    <div>
        <nuxt />
        <footer class="bg-blue-lighter text-white py-8 text-center">
            &copy;{{ currentYear }} michaeldgoldberg.com | all rights reserved
        </footer>
    </div>
</template>

<script>
export default {
    computed: {
        date(){
            return new Date()
        },
        currentYear() {
            return this.date.getFullYear()
        }
    }
}
</script>