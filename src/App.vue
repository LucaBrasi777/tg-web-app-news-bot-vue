<template>
  <v-app id="app" >

<div class="navi">
  <navi/>
</div>
<br/>
<div  class="main-div" >
<router-view></router-view>
</div>
  <cook/>    
<v-footer-component/>
 </v-app>
</template>

<script>
import cook from './components/cookies/cook.vue'
// import boots6 from './components/BootstrapMainPage/v-boots-6.vue'
// import vNavNav from './pages/nav-nav.vue'
// import vNav from './pages/nav.vue'
import vFooterComponent from './components/footer/v-footer-component.vue';
import navi from './components/nav/nav-2.vue';
// import search from '@/views/Select-2.vue'
// import searchGrid from '@/views/Select-2-grid.vue'
export default {
  components: {vFooterComponent,cook,
   
    navi,
   

  },
  data() {
    return {
      isScrolled: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    closedHome(){
    const close = document.getElementById('home').style.display="none"
    },
    handleScroll() {
      // Proverka, skrollili li my vverkh
      if (window.scrollY > 0) {
        this.isScrolled = true;
      } else {
        this.isScrolled = false;
      }
    },
  },
}
</script>
<style lang="scss" scoped>

.navi{
  position: fixed;
  right: 0;
  left: 0;
  z-index: 5;
}

.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-right: 50px;
  margin-left: 130px;
}
p{
  margin-left: 10px;
}

::placeholder{
  color: rgb(7, 7, 7);
}


ul{
  margin-left: 50px;
}
.brand{
  width: 100px;
}

.footer-logo{
  display: flex;
  margin: 0 auto;
}

li{
  font-weight: bold;
}
li:hover{
  text-decoration: underline;
}


  

#app {
  // margin-left: 20px;
  color: rgb(65, 46, 46);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

// .container {
//   padding-left: 20px;
//   padding-right: 20px;
// }



.main-div{
  @media screen and(max-width: 320px){
    margin-top: 30px;
  }
}
</style>
