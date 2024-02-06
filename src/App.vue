<template>
  <v-app id="app" style="">


 
  
<v-footer-component/>

 </v-app>
</template>

<script>

import vFooterComponent from './components/footer/v-footer-component.vue';


export default {
  components: {vFooterComponent,
   
   
   

  },
  data() {
    return {
      isScrolled: false,
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener("scroll", this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    checkScroll() {
      this.showButton = window.scrollY > 100; // Change 100 to the scroll position you prefer
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
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
 
  beforeDestroy() {
    window.removeEventListener("scroll", this.checkScroll);
  },
}
</script>
<style lang="scss" scoped>
.back{
  position: fixed;
  top:270px;
  z-index: 1;
}
.top{
  width: 10px;
  left: 0;
  position: fixed;
  top:120px;
  z-index:10;
}
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
  margin-top: 15px;
}
.main-div{
  @media screen and (max-width: 1199px){
    margin-top: px;
  }
  @media screen and (max-width: 320px){
    margin-top: 10px;
  }
}
</style>
