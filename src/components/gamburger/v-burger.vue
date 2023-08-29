<template lang="">
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




</style>