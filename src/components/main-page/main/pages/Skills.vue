<template>
    <div class="skills">
        <h2 data-r="Навыки" data-e="Skills" class="L">Skills</h2>
        <div class="skills__cont">
            <div>
                <div class="skills__cont_html">
                    <p>HTML5</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_css">
                    <p>CSS3</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_js">
                    <p>JavaScript</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_jquery">
                    <p>jQuery</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_vue">
                    <p>Vue</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_php">
                    <p>PHP</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_gulp">
                    <p>Gulp</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_sass">
                    <p>SASS</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_ps">
                    <p>PhotoShop</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_vs">
                    <p>Visual Studio</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_ajax">
                    <p>Ajax</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_react">
                    <p>React</p> 
                    <span class="line"></span>
                </div>
                <div class="skills__cont_english">
                    <p>English</p> 
                    <span class="line"></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'skills'
}
</script>

<style lang="scss">
 .skills {
    transform: rotateY(180deg);

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
    .skills__cont {
        position: relative;
        height: 60vh;
        overflow-x: hidden;
        overflow-y: scroll;
        transition: .2s;
        display: grid;
        align-items: center;
        
        > div {
            display: flex;
            flex-direction: column;
            position: relative;
            width: auto;
            left: 0;
            width: 60vw;

        > div {
            display: flex;
            width: 55vw;
            position: relative;

                > span {
                    display: block;
                    top: 22.5px;
                }
            }
        }
        .skills__cont_html span {
          width: 50%;   
          transition: 4s;    
        }
        .skills__cont_css span {
          width: 50%;
          transition: 4s;
        }
        .skills__cont_js span {
          width: 40%;
          transition: 3.2s;  
        }
        .skills__cont_jquery span {
          width: 35%;
          transition: 3s;  
        }
        .skills__cont_vue span {
          width: 20%;
          transition: 1.6s;  
        }
        .skills__cont_php span {
          width: 15%;
          transition: 1.2s;  
        }
        .skills__cont_gulp span {
          width: 15%;
          transition: 1.2s;  
        }
        .skills__cont_sass span {
          width: 30%;
          transition: 2.4s;  
        }
        .skills__cont_ps span {
          width: 22%;
          transition: 2.2s;
        }
        .skills__cont_vs span {
          width: 48%;
          transition: 4s;  
        }
        .skills__cont_ajax span {
          width: 45%;
          transition: 3.8s;  
        }
        .skills__cont_react span {
          width: 11%;
          transition: .88s;  
        }
        .skills__cont_english span {
          width: 38%;
          transition: 3s;  
        }
        span.linePlus {
          transition: 0s;
          width: 0px;
        }
    }
    .skills__cont:hover {
        box-shadow: inset -3px 0px 5px #932E96;
    }
    > div > div {
        padding: 0;
        display: flex;
        align-items: center;

        p {
            width: 140px;
            min-width: 140px;
            position: relative;
            left: 2vw;
            background: #fff;
            z-index: 1;
        }
        span {
            position: relative;
            background: #932E96;
            height: 5px;
        }
    }  
}
</style>