<template>
    <main>
        <div class="about">
            <h2 data-r="О чём" data-e="About" class="L">About</h2>

            <div class="about__menu">
                <div class="about__menu_about-me element L" data-num="0"
                data-r="Обо мне" data-e="About me">About me</div>
                <span></span>
                <div class="about__menu_skills element L" data-num="1"
                data-r="Навыки" data-e="Skills">Skills</div>
                <span></span>
                <div class="about__menu_experience element L" data-num="2"
                data-r="Опыт" data-e="Experience">Experience</div>
                <span></span>
                <div class="about__menu_contacts element L" data-num="3"
                data-r="Контакты" data-e="Contacts">Contacts</div>
                <span></span>
            </div>
        </div>

        <Pages @swiping="swiping" @touchSwiping="touchSwiping" />
    </main>
</template>

<script>
import Pages from './pages/Pages.vue'

export default {
    name: 'main-tag',
    components: {
        Pages
    },
     methods: {
        swiping(bool) {
            this.$emit('swiping', bool)
            console.log('Third' + bool)
        },
        touchSwiping(bool) {
            this.$emit('touchSwiping', bool)
        }
    }
}

</script>

<style lang="scss">

</style>