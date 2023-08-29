



<template lang="">
  <div class="nav">
      <header>

<div class="hamburger-menu">
<input id="menu__toggle" type="checkbox" />
<label class="menu__btn" for="menu__toggle">
<span></span>
</label>
<ul class="menu__box">
<li><router-link to="/" class="menu__item" href="#">Home</router-link></li>
<li><router-link to="/Crypto" class="menu__item" href="#">Crypto</router-link></li>
<li><router-link to="/News" class="menu__item" href="#">News</router-link></li>
<li><a class="menu__item" href="#">Sport</a></li>
<li><a class="menu__item" href="#">Entertainment</a></li>
<li><a class="menu__item" href="#">Partners</a></li>
<li><a class="menu__item" href="#">Login</a></li>
<li><a class="menu__item" href="#">Contacts</a></li>
<li><a class="menu__item" href="#">Social</a></li>

<li></li>

</ul>
</div>


<!-- <h1 class="gnh">GlobalNewsHub</h1> -->
<h2 class="logo"><router-link class="logo" to="/">GlobalNewsHub</router-link> </h2>
<!-- <h2 class="logo2">GNH</h2> -->
<nav>



<ul>

<li class="li"> <router-link class="router home" to="/">Home</router-link> </li>
<li class="li"><router-link class="router  news" to="/news">News</router-link></li>
<li class="li"><router-link class="router crypto" to="/Crypto">Business&Crypto</router-link></li>
<li class="li"> <router-link  class="router bloq" to="/bloq">TheScience</router-link></li>
<li class="li"><router-link  class="router sport" to="/sport">Sport</router-link></li>
<li class="li"><router-link  class="router entertainment" to="/entertainment">Entertainment</router-link></li> 
<!-- <li class="li">search</li> -->

<!-- <img src="./assets/YouTube_icon-icons.com_75725.png"> -->
</ul> 
</nav>

</header>

  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
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
  background-color: rgb(87, 77, 77);
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
  top: 0;
  left: -100%;
  width: 300px;
  height: 100%;
  margin: 0;
  padding: 80px 0;
  list-style: none;
  text-align: center;
  background-color: white;
  color: rgb(252, 240, 240);
  box-shadow: 1px 0px 6px rgba(0, 0, 0, .2);
  
}

/* элементы меню */
.menu__item {
  display: block;
  padding: 12px 24px;
  color: black;
  // font-family: Georgia, 'Times New Roman', Times, serif;


   font-size: 20px;
  font-weight: 100;
  text-decoration: none;
}

.menu__item:hover {
  background-color: rgb(20, 1, 1);
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






header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(242, 21, 21);
  box-shadow: 0 5px 10px rgba(0, 0, 0, .4);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
  color: white;
  height: 50px;
 
}

.li {
  margin-top: 17px;
  margin-left: px;
  position: relative;
  float: left;
  list-style-type: none;
  // color: rgb(222, 13, 58);
   font-size:16px;
  padding: 20px;
  
}

nav {
  padding-right: 100px;
  @media screen and (max-width:500px){
    height: 70px;
  }
}

.entertainment{
  @media screen and (max-width:1370px) {
      display: none;

  }
}

.sport {
 
  @media screen and (max-width:1250px) {
      display: none;

  }
}

.bloq {
  @media screen and (max-width:1200px) {
      display: none;

  }
}

.crypto {
  @media screen and (max-width:1090px) {
      display: none;

  }
}

.news {
  @media screen and (max-width:1000px) {
      display: none;

  }
}

.home {
  @media screen and (max-width:950px) {
      display: none;

  }
}

.logo {
  font-size: 30px;
  color: white;
  // font-weight: 100;
  text-decoration: none;
  margin-left: 0px;
@media screen and (max-width: 400px){
  font-size: 35px;
}

}

.logo2 {
  color: rgb(95, 80, 80);
  font-size: 45px;
  
  display: none;
  font-weight: 800;

}
.gnh{
  display: none;
  font-size: 35px;
  margin-left: 40px;
  // @media screen and (max-width:350px){
  //     display: inline;
  // }
}

.router {
  text-decoration: none;
  color: white;
 
  

}

.router:hover {
  text-decoration: underline;
}
</style>