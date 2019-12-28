<template>
    <div class="experience">
        <h2 data-r="Опыт" data-e="Experience" class="L">Experience</h2>
        <div class="experience__cont">
                <p class="L" 
                data-r="Начал свой путь в IT с шести с половиной месяцев обучения.
                Делал различные анимации, экспериментировал с SVG, делал игры (некоторые с упором на тач). 
                Реализовал регистрацию, авторизацию  и динамический вывод игровых метрик.

                Также у меня есть пять месяцев коммерческого опыта в компании Flexcore (OP Linux). Работал в основном с CMS 'FlexcoreCMS':
                разработка, интеграция, отладка, перенос сайтов, адаптация сайтов для мобильных устройств и планшетов, встраивание ajax, работа с куки и т. д.

                Последние три месяца работаю сдельно: 
                в основном вёрстка сайтов и интеграция с CMS 'Wordpress'. " 
                data-e="Began my career in six and a half months of training.
                        He made various animations, experimented with SVG, made games (some with a focus on the touch).
                        Implemented registration, authorization and dynamic output of game metrics.
                                                        
                        I also have five months of commercial experience with Flexcore (OP Linux). Worked mainly with CMS 'FlexcoreCMS':
                        development, integration, debugging, site transfer, website adaptation for mobile devices and tablets, ajax embedding, work with cookies, etc.
                                                        
                        The last three months I have been working piece by piece:
                        mainly site layout and integration with CMS 'Wordpress'">
                Began my career in six and a half months of training.<br/>
                Made various animations, experimented with SVG, made games (some with a focus on the touch).<br/>
                Implemented registration, authorization and dynamic output of game metrics.<br/>
                <br/>
                I also have five months of commercial experience with Flexcore (OP Linux). Worked mainly with CMS 'FlexcoreCMS':<br/>
                development, integration, debugging, site transfer, website adaptation for mobile devices and tablets, ajax embedding, work with cookies, etc.<br/>
                <br/>
                The last three months I have been working piece by piece:<br/>
                mainly site layout and integration with CMS 'Wordpress'.
                </p>

                <p class="L" data-r="Мои работы:" data-e="My works:">My works:</p>
                    <a style="padding: 20px" href="http://alazanskayadolina.ru/">alazanskayadolina.ru</a>
                    <a style="padding: 20px" href="https://s0ya.ru/">s0ya.ru</a>
                    <a style="padding: 20px" href="http://levongrant-arch.ru/">levongrant-arch.ru</a>
                    <a style="padding: 20px" href="http://jptica.flexcore.ru/">jptica.flexcore.ru</a>

            <p class="L" 
                data-r="Сейчас активно изучаю Vue js - Фоторез, Качества мозга, Диаграмма и Пятнашки сделаны при помощи Vue.
                Так же прошёл курс по React." 
                data-e="Excited by Vue js - Photo-cut, Brain, Diagram and OWG game were made with Vue.
                Also took a course from React."> 
                Excited by Vue js - Photo-cut, Brain, Diagram and OWG game were made with Vue.<br/> 
                Also took a course from React.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'experience',
}
</script>

<style lang="scss">
.experience {
    transform: rotateX(-180deg);
    transform-origin: 0% 100%;

    position: absolute;
    background: transparent;
    width: 55vw;
    height: 100vh;
    color: #932E96;
    transform-origin: 100% 100%;
    transition: .8s; 

    h2 {
        height: 20vh;
        display: flex;
        align-items: center;
        padding-left: 2vw;
    }
    .experience__cont {
        height: 60vh;
        overflow-Y: scroll;
        display: grid;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 20px 0;
        
        p {
            font-size: 17px;
            padding-left: 2vw;
            padding-right: 2vw;
            transition: .2s;
            margin: 0;
        }
        a {
            text-decoration: none;
            color: #222;
            margin-top: -16px;
            padding: 0;
            margin-left: auto;
            margin-right: auto;
        }
        a:hover {
            color: #932E96;
        }
        a:visited {
            color: #aaa; 
        }
    }
    .experience__cont:hover {
        box-shadow: inset -3px 0px 5px #932E96;
    }
}
</style>