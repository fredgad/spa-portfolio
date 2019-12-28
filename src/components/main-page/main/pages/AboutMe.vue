<template>
    <div class="about-me" 
        @mouseover="swiping(false)"
        @mouseleave="swiping(true)"
        @mouseout="swiping(true)"

        @touchstart="touchSwiping(false)"
        @touchendr="touchSwiping(true)">

        <h2 data-r="Обо мне" data-e="About me" class="L">About me</h2>
        <div class="about-me__cont">
            <div class="frame">
                <div>
                    <div>
                        <div>
                            <img src="../../../../img/my-photo.jpg" alt="my-photo">
                        </div>
                    </div>
                </div>
            </div>
            <p 
            data-r="26 лет
            Оптимист с техническим взглядом на мир. 
            Спокойный, терпеливый и амбициозный. Практикую технику тайм-менеджмента. Совершенствуюсь в скорости набора текста. Люблю делать различного рода интерактивные анимации и игры. Веду здоровый образ жизни, увлекаюсь философией, активно занимаюсь спортом и изучаю английский.

            Мои навыки :

            Качественно и быстро верстаю (HTML5, CSS3):
               всегда кроссбраузерно и адаптивно,
               методология BEM,
               препроцессор стилей SASS,
               сборщики проектов (Gulp, WebPack).

            Хорошо знаю JavaScript:
               декларативный подход, OOP, ES6.
               Хорошо знаю jQuery - много использовал в работе, но 
               предпочитаю писать на чистом JS. 
               Vue js - понимаю реактивность, имею общее понимание 
               взаимодействия компонентов друг с другом, MVC, MVVM, Vuex, Vue Router.
               React js - знаком с основами.

            Базовый уровень PHP: 
               работал с сессиями, кукисами,
               умею писать простые сниппеты для реализации СRUD 
               операций c БД,
               есть небольшие навыки работы с MySQL и PHPMyAdmin.

            В работе с изображениями использую Avocode и AddobePhotoshop.

            Понимаю Git, использую GitHub.

            В работе ищу хороший опыт и серьезные сложные проекты, готов много учиться, работать и осваивать новые технологии.
            Считаю, что цель - это именно то, что нужно для счастливой жизни.
            
            Служил в армии, холост." 
            data-e="I'm 26 years old
                An optimist with a technical outlook on the world.
                Calm, patient and ambitious. Practice time management techniques. Improving typing speed. Like to make various kinds of interactive animations and games. Lead a healthy lifestyle, fond of philosophy, actively involved in sports and study English.

                Qualitatively and quickly typeset (HTML5, CSS3):
                   always cross-browser and adaptive,
                   BEM methodology
                   SASS style preprocessor,
                   project builders (Gulp, WebPack).
                
                I know JavaScript well:
                   declarative approach, OOP, ES6.
                   I know jQuery well - I used a lot in work, but
                   prefer to write in pure JS.
                   Vue js - understand reactivity, have a common understanding
                   interaction of components with each other, MVC, MVVM, Vuex, Vue Router.
                   Familiar with the basics of React.
                
                PHP basic level:
                   worked with sessions, cookies,
                   can write simple snippets for implementing CRUD
                   operations with the database,
                   There are small skills in working with MySQL and PHPMyAdmin.
                
                Use Avocode and AddobePhotoshop to work with images.
                
                Understand Git, and use GitHub.

                In my work I am looking for good experience and serious complex projects, I am ready to work hard, and learn new technologies.
                I believe that the goal is exactly what you need for a happy life.
                
                Served in the army, single." 
            class="L" >
                I'm 26 years old<br/>
                An optimist with a technical outlook on the world.<br/>
                Calm, patient and ambitious. Practice time management techniques. Improving typing speed. Like to make various kinds of interactive animations and games. Lead a healthy lifestyle, fond of philosophy, actively involved in sports and study English.<br/>
                <br/><br/>
                Qualitatively and quickly typeset (HTML5, CSS3):<br/>   
                    &nbsp;&nbsp;always cross-browser and adaptive,<br/>
                    &nbsp;&nbsp;BEM methodology,<br/>
                    &nbsp;&nbsp;SASS style preprocessor,<br/>
                    &nbsp;&nbsp;use project builders (Gulp, WebPack).<br/>
                <br/>
                Know JavaScript well:<br/>
                    &nbsp;&nbsp;declarative approach, OOP, ES6.<br/>
                    &nbsp;&nbsp;know jQuery well - I used a lot in work, but<br/>
                    &nbsp;&nbsp;prefer to write in pure JS.<br/>
                    &nbsp;&nbsp;Vue js - understand reactivity, have a common understanding<br/>
                    &nbsp;&nbsp;interaction of components with each other, MVC, MVVM, Vuex, Vue Router.<br/>
                    &nbsp;&nbsp;Familiar with the basics of React..<br/>
                <br/>
                PHP basic level:<br/>
                    &nbsp;&nbsp;worked with sessions, cookies,<br/>
                    &nbsp;&nbsp;can write simple snippets for implementing CRUD<br/>
                    &nbsp;&nbsp;operations with the database,<br/>
                    &nbsp;&nbsp;there are small skills in working with MySQL and PHPMyAdmin.<br/>
                <br/>   
                Use Avocode and AddobePhotoshop to work with images.<br/>
                <br/>           
                Understand Git, and use GitHub.<br/>
                <br/><br/>

                In my work I am looking for good experience and serious complex projects, I am ready to work hard, and learn new technologies.<br/>
                I believe that the goal is exactly what you need for a happy life.<br/>
                <br/>
                Served in the army, single.
            </p>
        </div>
    </div>  
</template>

<script>
export default {
    name: 'about-me',
    methods: {
        swiping(bool) {
            this.$emit('swiping', bool)
            console.log('start' + bool)
        },
        touchSwiping(bool) {
            this.$emit('touchSwiping', bool)
        },
    }
}
</script>

<style lang="scss">
.about-me {
    transform-origin: 50% 0%;
    position: absolute;
    background: transparent;
    width: 55vw;
    height: 100vh;
    color: #932E96;
    transform-origin: 100% 100%;
    transition: .8s; 
    // background: rgba(0, 0, 0, 0.39);

    h2 {
        height: 20vh;
        display: flex;
        align-items: center;
        padding-left: 2vw;
    }

    .about-me__cont {
        display: grid;
        align-content: center;
        position: relative;
        height: 60vh;
        overflow-y: scroll;
        overflow-x: hidden;
         
        .frame {
            margin-top: 120vh;
            transform-origin: 50% 50%;
            position: relative;
            margin-left: auto;
            margin-right: auto;
            height: 225px;
            width: 225px;
            overflow: hidden;
            transition: .5s;
            animation: div1 2000s linear infinite reverse;
            box-sizing: border-box;
  
            * {
                box-sizing: border-box;
                transform-origin: 50% 50%;
                overflow: hidden;
                width: 225px;
                height: 225px;
            }
            > div {
                transition: .5s;
                animation: div2 10s linear infinite reverse;
                transform: rotate(45deg);
  
                > div {
                  transition: .5s;

                  > div {
                    transition: .5s;
                    position: relative;
                    display: flex;
                    width: 300px;
                    height: 300px;
                    justify-content: center;
                    align-items: center;
                    animation: div3 4000s linear infinite reverse;
                    top: -37.5px;
                    left: -37.5px;
  
                        img {
                            position: fixed;
                            z-index: 999;
                            width: auto;
                            transition: .5s;
                            overflow: hidden;
                            transform: scale(1.15)rotate(-45deg);
                            filter: saturate(0);
                        }
                    }
                }
            }
        }
        .frame:hover img {
            transform: scale(1.45)rotate(-45deg);
            filter: saturate(1);
            transition: 1s;
        }
        p {
            padding: 40px 2vw 20px 2vw;
        }
    }
    .about-me__cont:hover {
        box-shadow: inset -3px 0px 5px #932E96;
    }
}
</style>