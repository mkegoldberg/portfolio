<template>
    <section class="hero">
        <div class="flex flex-col-reverse md:flex-row container px-2 md:px-8">
            <div class="flex md:w-1/2 items-center">
                <div class="self-center flex-1 text-center md:text-left">
                    <h1 class="title text-white whitespace-no-wrap">
                        Hi,<br class="hidden md:inline">
                        I'm Mike <span class="hidden lg:inline">
                            Goldberg.
                        </span>
                    </h1>
                </div>
            </div>
            <div class="md:w-1/2 text-center img-container">
                <img
                    src="~assets/img/dev.png"
                    class="hero-img"
                >
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style scoped>
.hero{
    background-color: #ff735c;
}
.hero:after {
    background: inherit;
    content: '';
    display: block;
    height: 50%;
    left: 0;
    position: absolute;
    right: 0;
    z-index: -1;
    /* -webkit-backface-visibility: hidden; // for Chrome Windows */
}

.hero:after {
    top: 158px;
    transform: skewY(2deg);
    transform-origin: 100% 0;
}
.title {
    font-size: 4rem;
    font-weight: 300;
    letter-spacing: 1px;
    text-shadow: 0px 1px 4px #343841;
}
.hero-img {
    max-width: 500px;
    max-height: 500px;
}

/* Medium only */
@media screen and (min-width: 40em) and (max-width: 63.9375em) {
    .hero-img {
        max-width: 350px;
        max-height: 350px;
    }
    .hero:after {
        height: 28%;
    }
}
/* Small only */
@media screen and (max-width: 39.9375em) {
    .hero-img {
        max-width: 350px;
        max-height: 350px;
    }
}

</style>


