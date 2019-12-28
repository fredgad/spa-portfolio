<template>
    <div id="pags"> 
        <AboutMe @swiping="swiping" @touchSwiping="touchSwiping" />

        <Skills />

        <Experience />

        <Contacts />
    </div>
</template>

<script>
import AboutMe from './AboutMe.vue'
import Skills from './Skills.vue'
import Experience from './Experience.vue'
import Contacts from './Contacts.vue'

export default {
    name: 'pages',
    components: {
        AboutMe,
        Skills,
        Experience,
        Contacts
    },
    // props: ['props'],
    methods: {
        swiping(bool) {
            this.$emit('swiping', bool)
            console.log('Second' + bool)
        },
        touchSwiping(bool) {
            this.$emit('touchSwiping', bool)
        }
    }
}
</script>

<style lang="scss">
#pages {
    position: relative;
    width: 55vw;  
    perspective: 4000px;
    transform-origin: preserve-3d;
    overflow: hidden;
    z-index: 9;

    // > div {
    //     position: absolute;
    //     background: transparent;
    //     width: 55vw;
    //     height: 100vh;
    //     color: #932E96;
    //     transform-origin: 100% 100%;
    //     transition: .8s; 
    //     // background: rgba(0, 0, 0, 0.39);

    //     h2 {
    //         height: 20vh;
    //         display: flex;
    //         align-items: center;
    //         padding-left: 2vw;
    //     }
    // }
}
</style>