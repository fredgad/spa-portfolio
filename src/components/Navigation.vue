 <template>   
    <div id="nav" :class="props.navClass">    
        <div :class="props.hideCircleClass">
            <div :class="props.circleClass"></div>
        </div>   
        
        <div :class="props.navbarClass">
            <div v-for="(item, i) in props.navArr" :key="i" :class="item.lineClass">
                <router-link tag="div" 
                    :to="item.to"
                    active-class="active" 
                    :data-r="item.rName" 
                    :data-e="item.eName" 
                    class="L">
                    {{item.eName}}
                </router-link>     
            </div>
        </div>
        
        <div id="navButton" @click="navEvent">
            <div class="top"></div>
            <div class="mid"></div>
            <div class="bot"></div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'navigation', 
    props: ['props'],
    methods: {
        navEvent() {
            this.$emit('navEvent')
            console.log(this.props)
        }
    }
}
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  height: 30px;
  width: 40px;
  left: 0;
  top: calc(50vh - 155px);
  background: #222; 
  z-index: 999;
  transition: .34s;
  border-left: 4px solid #932E96;  
 
  .hide__circle {
    left: 100%;
    display: flex;
    position: relative;
    height: 400px;
    width: 0;
    overflow: hidden;
    transition: 1.34s;

    .circle {
      left: -180px;
      border-radius: 50%;
      height: 300px;
      width: 300px;
      position: absolute;
      border: 30px solid #222;
      border-right: 30px solid transparent;
      border-top: 30px solid transparent;
      transform: rotate(45deg);
      transition: .72s linear;
    }
    .circleOut {
      transform: rotate(225deg);
    }
  }
  .hideOut {
    width: 400px;
    transition: .7s;
  }
  .navbar {
    position: absolute;
    top: -75px;
    left: 0px;
    height: 450px;
    width: 0px;
    overflow: hidden;
    transition: .34s;
    padding-top: 90px;

    .navbar__line {
      position: relative;
      height: 30px;
      width: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      right: 100%;
      transform-origin: 0% 50%;
      overflow: hidden;
      transition: border .25s;
      transition: width .15s;

      div {
        color: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 180px;
        background: #222;
        text-decoration: none;
        font-size: 15px;
        font-family: Roboto, sans-serif;
        cursor: pointer;
      }
      div:hover {
        color: #932E96;
        transform: scale(1.3);
        transition: .6s;
      }
    }
    .navbar__line:hover {
      width: 160px;
      transition: border .25s;
      border-right: 9px solid #932E96;
      
    }
    .navbar__line:nth-child(1) {
      left: 55px;
      transform: rotate(-44deg);
    }
    .navbar__line:nth-child(2) {
      left: 77px;
      transform: rotate(-33deg);
    }
    .navbar__line:nth-child(3) {
      left: 93px;
      transform: rotate(-23deg);
    }
    .navbar__line:nth-child(4) {
      left: 103px;
      transform: rotate(-12deg);
    }
    .navbar__line:nth-child(5) {
      left: 106px;
      transform: rotate(0);
    }
    .navbar__line:nth-child(6) {
      left: 103px;
      transform: rotate(12deg);
    }
    .navbar__line:nth-child(7) {
      left: 93px;
      transform: rotate(23deg);
    }
    .navbar__line:nth-child(8) {
      left: 77px;
      transform: rotate(33deg);
    }
    .navbar__line:nth-child(9) {
      left: 55px;
      transform: rotate(44deg);
    }
    .lineOut {
      transition: width .34s;
      width: 150px;
      overflow: hidden;
    }
    .navbar__out {
      right: 0;
    }
    .navbar__line:first-child {
      margin-top: 30px;
    }
  }
  .navbarOpen {
    transition: 0s;
    left: 225px;
    height: 450px;
    width: 400px;
  }
  #navButton {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999999999;
    height: 30px;
    width: 30px;
    padding-top: 4px;
    padding-left: 5px;
    cursor: pointer;
    
    > div {
      height: 4px;
      width: 20px;
      background: #932E96;
      border-radius: 3px;
      transition: .6s;
      margin-bottom: 5px;
    }
    .top {
      transform: translateY(0px)rotate(0deg);
    }
    .mid {
      transform: rotateZ(0deg);
      opacity: 1;
    }
    .bot {
      transform: translateY(0px)rotate(0deg);
    }
  }
  #navButton:hover {
    .top {
      transform: translateY(15px)rotate(495deg)
    }
    .mid {
      transform: rotateZ(1111deg);
      opacity: 0;
    }
    .bot {
      transform: translateY(-15px)rotate(-495deg);
    }
  }
}
#nav.navOpenWidth {
  width: 180px;
}
#nav.navOpen {

  #navButton {
    .top {
      transform: translateY(15px)rotate(-495deg)
    }
    .mid {
      transform: rotateZ(-1111deg);
      opacity: 0;
    }
    .bot {
      transform: translateY(-15px)rotate(495deg);
    }
  }
}

#nav::before {
  content: '';
  position: fixed;
  visibility: hidden;
  height: 100vh;
  width: 100vw;
  top: 0;
  opacity: 0;
  z-index: -1;
  transition: .94s;
  background: #fff;
}
#nav.navOpen::before {
    visibility: visible;
    opacity: .5;
    transition: .94s;
}
</style>