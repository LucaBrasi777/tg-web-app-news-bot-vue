<template>
  <v-app id="app">

    <navi />
    <br/>
    <router-view />
    <br/>
    
    <br/>
     <div class="footer-logo">
    
    <h2>Global</h2><router-link class="" to="/"><img class="brand" src="./assets/news-1644696_1280.webp"/></router-link>  
    
 
  </div>


  <form>
  <input type="text" placeholder="Search Global News" style="">
  <input type="submit" value="Go" class="button">
</form>
<div class="grid">
  <ul>
    <li>Home</li>
    <li>News</li>
    <li>Sport</li>


  </ul>

  <ul>
    <li>Business</li>
    <li>Entertainment</li>
    <li>Crypto News</li>
   

  </ul>

  <ul>
    <li>Technology</li>
    <li>Health</li>
    <li>Articles</li>
   
    

  </ul>

  <ul>
    <li>About us</li>
    <li>GlobalNewsBlog</li>
    <li>Video</li>
    
    

  </ul>
  <ul>
    <li>Contact</li>
    <li>Login</li>
    <li>Home</li>

  </ul>
  <ul>
    <li>Home</li>
    <li>Home</li>
    <li>Home</li>

  </ul>
  
</div>

<p>©2023 Online Tutorials | All Rights Reserved</p>
 

 </v-app>
</template>

<script>
import vNav from './pages/nav.vue'
import vFooterComponent from './components/footer/v-footer-component.vue';
import navi from './components/nav/nav.vue';
export default {
  components: {
    vNav,
    vFooterComponent,
    navi

  }
}
</script>
<style lang="scss" scoped>
p{
  margin-left: 10px;
}

::placeholder{
  color: rgb(7, 7, 7);
}

.grid{
  display: grid;
  grid-template-columns: repeat(6,1fr);
  padding: 50px;
  // background-color: black;
  // color: white;
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

input{
  
  margin-left: 20px;
  // margin-right: 50px;
  height: 50px;
  padding: 7px;
  font-weight: bold;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 7px;
  position: relative;
  width: 100%;
  outline: none;
}
  
input:hover{
  // background-color: black;
  // color: white;
  
}
input[type='submit'] {
  position: absolute;
  right: 0;
  top: 0;
   width: 70px;
   color: rgb(4, 4, 4);
   
}
.button:hover{
  background-color: black;
  color: white;
}
form {
  position: relative;
  
}




















#app {
  color: rgb(65, 46, 46);
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

.container {
  padding-left: 20px;
  padding-right: 20px;
}



.grid{
  @media screen and (max-width: 1000px){
    grid-template-columns: repeat(3,1fr);
  }
  @media screen and (max-width: 500px){
    grid-template-columns: repeat(2,1fr);
  }
}
</style>
