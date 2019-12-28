<template>
    <div>
        <Field :props="{fieldArr}"/> 
        <Navigation @navEvent="buttonEvent" :props="{
            navArr,
            navClass,
            navbarClass,
            hideCircleClass,
            circleClass,
            navCheck,
            navWall
        }" />

        <router-view></router-view>
    </div>
</template>

<script>
import Field from './Field.vue'
import Navigation from './Navigation.vue'

export default {
    name: 'app', 
    components: {
        Field, 
        Navigation
    },
    data() {
        return {
            fieldArr: [
                { divClass: 'zero', imgClass: 'lazy', src: '1__T_tWFGY29J6MEKek1vBaw.png'},
                { divClass: 'one', imgClass: 'lazy', src: 'gulp.png'},
                { divClass: 'two', imgClass: 'lazy', src: '600px-HTML5_Badge.svg.png'},
                { divClass: 'three', imgClass: 'lazy', src: 'css3.png'},
                { divClass: 'four', imgClass: 'lazy', src: '640px-Sass_Logo_Color.svg.png'},
                { divClass: 'five', imgClass: 'lazy', src: 'jquery-8-1175153.png'},
                { divClass: 'six', imgClass: 'lazy', src: 'git.png'},
                { divClass: 'seven', imgClass: 'lazy', src: '1280px-PHP-logo.svg.png'},
                { divClass: 'eight', imgClass: 'lazy', src: '788px-Adobe_Photoshop_CC_icon.svg.png'},
                { divClass: 'nine', imgClass: 'lazy', src: '58650.png'},
                { divClass: 'side1', imgClass: 'lazy', src: 'vue.png'},
                { divClass: 'side2', imgClass: 'lazy', src: 'javascript-logo-8892AEFCAC-seeklogo.com.png'}
            ],
            navArr: [  // Navigation menu array
                { eName: 'Main', rName: 'Главная', to: '/', lineClass: 'navbar__line'},
                { eName: 'Game', rName: 'Игра', to: '/game', lineClass: 'navbar__line'},
                { eName: 'Photocut', rName: 'Фоторез', to: '/photocut', lineClass: 'navbar__line'},
                { eName: 'Timer', rName: 'Таймер', to: '/timer', lineClass: 'navbar__line'},
                { eName: 'Brain', rName: 'Качества мозга', to: '/brain', lineClass: 'navbar__line'},
                { eName: 'Onpoint test', rName: 'Onpoint тест', to: '/onpoint-test', lineClass: 'navbar__line'},
                { eName: 'Bubbles', rName: 'Пузырьки', to: '/bubbles', lineClass: 'navbar__line'},
                { eName: 'Some diagram', rName: 'Диаграмма', to: '/diagram', lineClass: 'navbar__line'},
                { eName: 'OWG game', rName: 'Пятнашки', to: '/owg-game', lineClass: 'navbar__line'}
            ],
            navClass: '',
            navbarClass: 'navbar',
            hideCircleClass: 'hide__circle',
            circleClass: 'circle',
            navCheck: false,
            navWall: false,
        }
    },
    methods: {
        buttonEvent(speed) { // Navigation menu click toggle event
            this.navCheck = this.navCheck ? false : true

            if (this.navCheck) {  // Opening menu
                this.navClass = 'navOpen navOpenWidth'
                this.navbarClass = 'navbar navbarOpen'
                this.hideCircleClass = 'hide__circle hideOut'
                this.circleClass = 'circle circleOut'
                this.navWall = true

                new Promise((response)=> { // Asynchronous animation
                    setTimeout(()=> {
                        if(this.navCheck) {
                            this.navbarClass = 'navbar navbarOpen'
                            response(1);
                        }
                    }, speed)
                }).then(()=> {
                    this.navArr.map((el, i) => { // Opening menu items one by one
                        setTimeout(()=> {
                            if(this.navCheck) {
                                el.lineClass = 'navbar__line lineOut'
                            }
                        }, i * 35)
                    })
                })
            } else { // Closing the menu
                this.hideCircleClass = 'hide__circle'
                this.circleClass = 'circle'
                this.navWall = false
                this.navClass = 'navOpenWidth'

                this.navArr.map((el, i) => { // Closing menu items one by one
                    if(!this.navCheck) {
                        setTimeout(()=> {
                            el.lineClass = 'navbar__line'
                            if(!this.navCheck) {
                                this.hideCircleClass = 'hide__circle'
                            }
                        }, (this.navArr.length - i) * 35)
                    }
                })
                setTimeout(()=> { // Asynchronous alternate animation
                    if(!this.navCheck) {
                        this.navClass = ''
                        this.navbarClass = 'navbar'
                    }
                }, speed + 340)
	        }
        }
    }
}
</script>

<style lang="scss">
</style>