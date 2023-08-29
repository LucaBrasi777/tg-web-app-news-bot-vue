<template lang="">
  <div class="nav">
      <header>
        <h2>Global</h2><router-link class="" to="/"><img class="brand" src="../../assets/news-1644696_1280.webp"/></router-link>  


<div class="hamburger-menu">
<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
<span></span>
</label>
<ul class="menu__box">
<li><router-link to="/" class="menu__item" href="#">Home</router-link></li>
<li><router-link to="/Crypto" class="menu__item" href="#">Crypto</router-link></li>
<li><router-link to="/News" class="menu__item" href="#">News</router-link></li>
<li><router-link to="/Exchange" class="menu__item" href="#">Exchange</router-link></li>
<li><router-link to="/Sport" class="menu__item" href="#">Sport</router-link></li>
<!-- <li><a class="menu__item" href="#">Partners</a></li> -->
<li><router-link to="/Entertainment" class="menu__item" href="#">Entertainment</router-link></li>
<li><router-link to='/Tech' class="menu__item" href="#">Technology</router-link></li>
<li><router-link to="/Business" class="menu__item" href="#">Business</router-link></li> 

<li></li>

</ul>
</div>




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
  
  <!-- <span class="dropdown-content">
    <a href="#">Stocks</a>
    <a href="#">Articles</a>
    <a href="#"></a>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </span> -->
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
    <!-- <span><router-link to="/Sport" style=""></router-link><img class="img-a" src="../../assets/sport.jpeg"/></span>
    <span><router-link to="/Tech" style="">Technology</router-link><img class="img-a" src="../../assets/Tech-News.png"/></span>
    <span><router-link to="/Sceince" style="">Scence</router-link><img class="img-a" src="../../assets/ScienceNews_for_Students.png"/></span> 
    <span ><router-link to="/Entertainment" style="">Entertainment</router-link><img class="img-a" src="../../assets/news_features_entertainment-min.webp"/></span>
    -->
    </span>
</span>
<span class="dropdown">
  <span class="dropbtn crypto "><router-link class="sceince-btn" to="/Crypto">Science&Technology</router-link></span>
  <span class="dropdown-content grid">
   <span> <router-link to="/Sseince" class="drop">SceinceNews</router-link ></span>
   <span> <router-link to="/Tech" style="" class="drop">TechnologyNews</router-link></span>
   <span> <router-link to="/Ai"    style="" class="drop">AI</router-link></span>
    <span> <router-link to="/Defi" style="" class="drop">Cosmos</router-link></span>
  <!---<span> <router-link to="/Ico" style="">ICO</router-link><img class="img-a" src="../../assets/ico-1.jpg"/></span>
   <span> <router-link to="/Top" style="">TOP-100</router-link><img class="img-a" src="../../assets/cryptonews.jpeg"/></span> -->
   <!-- <span> <router-link to="Crypto" style="color:white">CryptoPeople</router-link><img class="img-a" src="../../assets/crypto-personalities (1).webp"/></span>
   <span> <router-link to="/Nft"    style="color:white">NFT</router-link><img class="img-a" src="../../assets/nft nft.jpeg"/></span>
   <span> <router-link to="/Defi" style="color:white">DEFI</router-link><img class="img-a" src="../../assets/defi.jpeg"/></span>
   -->
   
  </span>
</span>
<span class="dropdown">
  <span class="dropbtn business-btn"><router-link class="health-btn" to="/Business">Health&Sport</router-link></span>
  <span class="dropdown-content">
    
    <span> <router-link to="/Health" style="" class="drop">Health news</router-link></span>
   <span> <router-link to="/Sport" style="" class="drop">Sport news</router-link></span>
   <!--<span> <router-link to="/Nft"    style="">Articles</router-link><img class="img-a" src="../../assets/nft nft.jpeg"/></span>-->
   
  </span> 
</span>
<span class="dropdown ai">
  <span class="dropbtn tech-btn"><router-link class="entertainment-btn" to="/Entertainment">Entertainment</router-link></span>
 <!--- <span class="dropdown-content">
    <span> <router-link to="/Ai">AI</router-link><img class="img-a" src="../../assets//ai2.jpeg"></span>
     <a href="#"></a> 
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a>
    <a href="#"></a> 
  </span>-->
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
export default {
  components: {
    vCrypto6Kurs,
    vCrypto7Top,
    vCryptoAnimation
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

/* Change the background color of the dropdown button when the dropdown content is shown */

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




/* скрываем чекбокс */
#menu__toggle {
  opacity: 0;
}

/* стилизуем кнопку */
.menu__btn {
  display: flex;
  /* используем flex для центрирования содержимого */
  align-items: center;
  /* центрируем содержимое кнопки */
  position: fixed;
  top: 10px;
  left: 20px;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;

}

/* добавляем "гамбургер" */
.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: rgb(4, 4, 4);
  display: none;

  @media screen and (max-width:1370px) {
    display: inline;

  }
}

.menu__btn>span::before {
  content: '';
  top: -8px;
}

.menu__btn>span::after {
  content: '';
  top: 8px;
}

/* контейнер меню */
.menu__box {
  display: block;
  position: fixed;
  visibility: hidden;
  margin-top: 73px;
  left: -100%;
  width: 300px;
  height: 100%;
  // margin: 0;
  padding: 0px 0;
  list-style: none;
  text-align: center;
  background-color:white;
font-weight: bold;
  color:black;
  // box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}

/* элементы меню */
.menu__item {
  display: block;
  padding: 12px 24px;
  color: rgb(1, 1, 1);
  // font-family: Georgia, 'Times New Roman', Times, serif;


  //  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}

.menu__item:hover {
  background-color: rgb(245, 2, 2);
  color: white;
}

#menu__toggle:checked~.menu__btn>span {
  transform: rotate(45deg);
}

#menu__toggle:checked~.menu__btn>span::before {
  top: 0;
  transform: rotate(0);
}

#menu__toggle:checked~.menu__btn>span::after {
  top: 0;
  transform: rotate(90deg);
}

#menu__toggle:checked~.menu__box {
  visibility: visible;
  left: 0;
}

.menu__btn>span,
.menu__btn>span::before,
.menu__btn>span::after {
  transition-duration: .25s;
}

.menu__box {
  transition-duration: .25s;
}

.menu__item {
  transition-duration: .25s;
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

// .home:hover,
// .crypto:hover,
// .news:hover,
// .exchange:hover {
//   background-color: rgb(42, 39, 39);
//   text-decoration: none;
// }

.logo {
  font-size: 30px;
  color: white;

  text-decoration: none;
  margin-left: 0px;


}

// .logo2 {
//   color: rgb(95, 80, 80);
//   font-size: 45px;

//   display: none;
//   font-weight: 800;

// }













// @media
.anime {
  background-color: white;
 
}













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