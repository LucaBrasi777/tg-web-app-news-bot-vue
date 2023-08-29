<template lang="">
  <div class="nav">
      <header>
        <h2>Global</h2><router-link class="" to="/"><img class="brand" src="../../assets/news-1644696_1280.webp"/></router-link>  

<Burger/>
<nav>
<v-crypto7-top/>

<ul>
 <span class="dropdown"> 
  <span class="dropbtn home home-btn">News</span>
  <span class="dropdown-content grid">
  <span><router-link class="drop" to="/Business" style="">BusinessNews</router-link></span>
    <span><router-link class="drop" to="/Crypto" style="">CryptoNews</router-link></span>
    <span><router-link class="drop" to="/Sport" style="">Sport</router-link></span>
    <span><router-link class="drop" to="/Tech" style="">Technology</router-link></span>
    <span><router-link class="drop" to="/Entertainment" style="Entertainment">Entertainment</router-link></span>
    <span><router-link class="drop" to="/Health" style="">Health</router-link></span>
    <span><router-link class="drop" to="/Sceince" style="">The sceince</router-link></span>
    <span><router-link class="drop" to="/Stocks" style="">Ai</router-link></span>
  
  
</span> 
  </span>
<span class="dropdown">
  <span class="dropbtn news"><router-link class="news-btn" to="/Business">Business</router-link></span>
  <span class="dropdown-content grid">
    <span><router-link class="drop" to="/Select" style="">BusinessNews</router-link></span>
    <span><router-link class="drop" to="/Crypto" style="">CryptoNews</router-link></span>
    <span><router-link class="drop" to="/Business" style="">BusinessNews</router-link></span>
    <span><router-link class="drop" to="/Crypto" style="">CryptoNews</router-link></span>
    
    <span><router-link class="drop" to="/Business" style="">BusinessNews</router-link></span>
    <span><router-link class="drop" to="/Crypto" style="">CryptoNews</router-link></span>
    
    </span>
</span>
<span class="dropdown">
  <span class="dropbtn crypto "><router-link class="sceince-btn" to="/Crypto">Science&Technology</router-link></span>
  <span class="dropdown-content grid">
   <span> <router-link to="/Sseince" class="drop">SceinceNews</router-link ></span>
   <span> <router-link to="/Tech" style="" class="drop">TechnologyNews</router-link></span>
   <span> <router-link to="/Ai"    style="" class="drop">AI</router-link></span>
    <span> <router-link to="/Defi" style="" class="drop">Cosmos</router-link></span>
 
   
  </span>
</span>
<span class="dropdown">
  <span class="dropbtn business-btn"><router-link class="health-btn" to="/Business">Health&Sport</router-link></span>
  <span class="dropdown-content">
    
    <span> <router-link to="/Health" style="" class="drop">Health news</router-link></span>
   <span> <router-link to="/Sport" style="" class="drop">Sport news</router-link></span>
   
  </span> 
</span>
<span class="dropdown ai">
  <span class="dropbtn tech-btn"><router-link class="entertainment-btn" to="/Entertainment">Entertainment</router-link></span>
 
</span>

</ul> 

</nav>

</header>

<div class="anime">
<v-crypto-animation/>
</div>
<div class="kurs">
<v-crypto6-kurs/>
</div>

  </div>
</template>
<script>
import vCrypto6Kurs from '../crypto/v-crypto6-kurs.vue';
import vCrypto7Top from '../crypto/v-crypto7-top.vue';
import vCryptoAnimation from '../crypto/v-crypto-animation.vue';
import Burger from '../gamburger/v-burger.vue'
export default {
  components: {
    vCrypto6Kurs,
    vCrypto7Top,
    vCryptoAnimation,
    Burger
  },
  
}
</script>
<style lang="scss" scoped>
.drop{
  border-radius: 5px;
}
.drop:hover{
  background-color: black;
  color: white;

}
.home-btn{
  // color: #fa0b32;
}
h2{
  font-size: 45px;
}
nav{
  width: 1200px;
}
.anime {
  margin-top: 110px;
}


.grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  background-color: black;
  color: white
}

.link-white {
  color: white;
}

/* Style The Dropdown Button */
.img-a {
  width: 220px;
  margin: 3px;
  height: 120px;
  border: solid rgb(133, 121, 121) 1px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropbtn {
  margin-left: 11px;
  width: 340px;
  // background-color: #030303;
  // color: rgb(2, 2, 2);
  margin: 9px;
  font-size: 20px;
 
  border: none;
  cursor: pointer;

}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;

}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color:white;
  min-width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  padding: 3px;
  font-size: 18px;
  overflow: auto;
  // font-weight: bold;
  border-radius: 10px;
  border: 1px solid black;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: rgb(1, 0, 0);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  // background-color: #010101;
  // color: white;

}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: grid;
  // background-color: white;
  // background-color: black;
  // color: rgb(1, 1, 1);
}

a {
  text-decoration: none;
  color: rgb(1, 1, 1);
}













p {
  color: black;
}


.brand {
  height: 85px;
  margin-top: 20px;
 

}






.router {
  text-decoration: none;
  color: white;



}

.router:hover {
  text-decoration: underline;
}


.router {
  font-size: 17px;
  // font-weight: bold;
}

header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;

  box-shadow: 0 5px 10px white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18%;
  color: rgb(1, 1, 1);
  height: 110px;
  z-index: 2;

}


.brand {
  height: 70px;
}

ul {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  list-style-type: none;
  padding-top: 50px;
  margin-left: 5px;
  margin-right: 15px;
}

nav {
  height: 80px;

}


.home-btn,
.health-btn,
.news,
.exchange-btn,
.tech-btn,
.entertainment-btn,
.business-btn,
.sceince-btn,
.sport-btn {
  // background-color: black;
  font-weight: bold;
  padding: px;

}



.logo {
  font-size: 30px;
  color: white;

  text-decoration: none;
  margin-left: 0px;


}

.anime {
  background-color: white;
 
}
.kurs{
  
  margin-right: 40px;
}








// @media

.sport-btn {
  @media screen and(max-width:1225px) {
    display: none;

  }
}

.entertainment-btn {
  @media screen and(max-width:1225px) {
    display: none;

  }
}

.tech-btn {
  @media screen and(max-width:925px) {
    display: none;

  }
}

.health-btn {
  @media screen and(max-width:1025px) {
    display: none;

  }
}

.sceince-btn {
  @media screen and(max-width:830px) {
    display: none;

  }
}

.news-btn {
  @media screen and(max-width:600px) {
    display: none;

  }
}

.home-btn {
  @media screen and(max-width:450px) {
    display: none;

  }
}
.brand{
  @media screen and(max-width: 335px){
    height: 60px;
  }
}
h2{
  @media screen and(max-width: 310px){
    font-size: 40px;
  }
  @media screen and(max-width: 290px){
    font-size: 30px;
  }
}
header{
  @media screen and(max-width: 400px){
    background-color: black;
  }
}
h2{
  @media screen and(max-width: 400px){
    color: white;
  }
}
.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after{
  @media screen and (max-width: 400px){
    background-color: white;
  }
}
</style>