<template>
    <div class="field">
        <div class="cont" >
            <div v-for="(item, i) in props.fieldArr" :key="i"
                :class="item.divClass">
                <div :data-src="`../../img/${item.src}`" 
                :class="item.imgClass"></div>
            </div>
        </div>
        <!-- <div class="cont" >
            <div class="zero">
                <div data-src="../../img/1__T_tWFGY29J6MEKek1vBaw.png" class="lazy"></div>
            </div>
            <div class="one">
                <div data-src="../../img/gulp.png" class="lazy"></div>
            </div>
            <div class="two">
                <div data-src="../../img/600px-HTML5_Badge.svg.png" class="lazy"></div>
            </div>
            <div class="three">
                <div data-src="../../img/css3.png" class="lazy"></div>
            </div>
            <div class="four">
                <div data-src="../../img/640px-Sass_Logo_Color.svg.png" class="lazy"></div>
            </div>
            <div class="five"> 
                <div data-src="../../img/jquery-8-1175153.png" class="lazy">
                </div>
            </div>
            <div class="six">
                <div data-src="../../img/git.png" class="lazy"></div>
            </div>
            <div class="seven">
                <div data-src="../../img/1280px-PHP-logo.svg.png" class="lazy"></div>
            </div>
            <div class="eight">
                <div data-src="../../img/788px-Adobe_Photoshop_CC_icon.svg.png" class="lazy"></div>
            </div>
            <div class="nine">
                <div data-src="../../img/58650.png" class="lazy"></div>
            </div>
            <div class="side1">
                <div data-src="../../img/vue.png" class="lazy"></div>
            </div>
            <div class="side2">
                <div data-src="../../img/javascript-logo-8892AEFCAC-seeklogo.com.png" class="lazy"></div>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
    name: 'field',
    props: ['props']
}
</script>

<style lang="scss">
.cont > div {

}
</style>