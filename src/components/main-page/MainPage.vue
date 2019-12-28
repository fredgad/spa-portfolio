<template>
    <div id="wrapper" :style="`transform: translate(${positions[page]})`">
        <HeaderTag :props="{nameArr}"/>

        <MainTag @swiping="swiping" @touchSwiping="touchSwiping" />

        <FooterTag />
    </div>
</template>

<script>
// import store from '../store/store'
import HeaderTag from './header/HeaderTag.vue'
import MainTag from './main/MainTag.vue'
import FooterTag from './footer/FooterTag.vue'

export default { 
    name: 'main-page',
    components: {
        HeaderTag,
        MainTag,
        FooterTag
    },
    data() {
        return {
            nameArr: [
                { rLet: 'Р', eLet: 'R', letClass: 'L tran'},
                { rLet: 'у', eLet: 'u', letClass: 'L tran'},
                { rLet: 'с', eLet: 's', letClass: 'L tran'},
                { rLet: 'л', eLet: 'l', letClass: 'L tran'},
                { rLet: 'а', eLet: 'a', letClass: 'L tran'},
                { rLet: 'н', eLet: 'n', letClass: 'L tran'},
                { rLet: 'И', eLet: 'I', letClass: 'L tran'},
                { rLet: 'д', eLet: 'd', letClass: 'L tran'},
                { rLet: 'р', eLet: 'r', letClass: 'L tran'},
                { rLet: 'и', eLet: 'i', letClass: 'L tran'},
                { rLet: 'с', eLet: 's', letClass: 'L tran'},
                { rLet: 'о', eLet: 'o', letClass: 'L tran'},
                { rLet: 'в', eLet: 'v', letClass: 'L tran'},
            ],
            positions: ['0', '-100vw', '-100vw, -100vh', '-200vw, -100vh'],
            page: 0,
            swipingCheck: true,
            wheelCheckTop: true,
            wheelCheckBot: true,
            circleTransition: '0s',
            startTime: 0,
            swipeX: 0,
            swipeY: 0,
            swipeHeight: 0,
        }
    },
    methods: {
        handleScroll(e) {
            if (e.deltaY > 0) {
                this.wheelEvents(1)
            } else {
                this.wheelEvents() 
            }
        },
        handleTouchStart(e) {
            let touchObj = e.changedTouches[0]

            this.startTime = new Date().getTime()
            this.swipeX = touchObj.pageX
            this.swipeY = touchObj.pageY
            this.swipeHeight = 0
        },
        swiping(bool) {
            console.log(bool)
            this.swipingCheck = bool
        },
        touchSwiping(bool) {
            if(bool) {
                setTimeout(()=> {
                    this.swipingCheck = true
                }, 0)
            } else {
                this.swipingCheck = false
            }
        },
        wheelEvents(up) {
            if(this.swipingCheck) {
                if (up) {
                    if(this.wheelCheckTop) {
                        this.scrollingPage(true); //Scrolling up
                        this.wheelCheckTop = false
                        setTimeout(()=> {
                            this.wheelCheckTop = true
                            this.circleTransition = '0s'
                        }, 350);
                    }
                } else {
                    if(this.wheelCheckBot) {
                        this.scrollingPage(); //Scrolling down
                        this.wheelCheckBot = false
                        setTimeout(()=> {
                            this.wheelCheckBot = true
                            this.circleTransition = '0s'
                        }, 350);
                    }
                }
            }
        },
        scrollingPage(direction) {
            if(direction) {
                this.page = this.page < 3 ? this.page + 1 : 3
            } else {
                this.page = this.page ? this.page - 1 : 0
            }

            this.nameAppearance(!this.page);

            console.log(this.page)
        },
        nameAppearance(bool) {
            if(bool) {
                setTimeout(()=> {
                    this.nameArr.map((el, i) => { 
                        setTimeout(()=> {
                            el.letClass = 'L away'
                        }, i * 60) 
                    })
                }, 340); 
            } else {
                this.nameArr.map(el => el.letClass = 'L tran')
            }
        },
    },
    created () {
        this.nameAppearance(!this.page)
        window.addEventListener('wheel', this.handleScroll)
        window.addEventListener('touchstart', this.handleTouchstart)
    },
    destroyed () {
        window.removeEventListener('wheel', this.handleScroll)
        window.addEventListener('touchstart', this.handleTouchstart)
    }
}

</script>

<style lang="scss">

</style>