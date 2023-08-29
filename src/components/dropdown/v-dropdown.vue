<template lang="">
    <div>
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
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
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
.drop{
  border-radius: 5px;
}
.drop:hover{
  background-color: black;
  color: white;

}
</style>