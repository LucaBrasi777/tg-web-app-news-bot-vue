<template lang="">
  
      <header>
       
        <!-- <h2>Global</h2><router-link class="" to="/"><img class="brand" src="../../assets/news-1644696_1280.webp"/></router-link>   -->
        <Burger/>
        <anime/><br/>
        <div ><router-link to="/"><img class="logo-news" src="../../assets/bbc-newshub-logo.jpg"></router-link></div>
<div ><router-link to="/"><img class="logo-news-hub" src="../../assets/bbc-newshub-logo.jpg"></router-link></div>
<div class="search"> <search/></div>



  <div class="grid-nav">


<ul>


  <!-- <span class="dropdown ai">
  <span class="dropbtn crypto-btn bt open" @click="openNav" style="color:white">...</span>
 </span>  -->

 
 <span class="dropdown"> 
  <span class="dropbtn  news-btn " style="color:white">NEWS</span>
  <span class="dropdown-content grid grid-news">


  <span class="span">
  <!-- v-for="item in business"
  :key="business"
  >
  <img :src="item.urlToImage"> -->
  <router-link class="drop" to="/Business" style="">
    Business&Crypto</router-link>
  </span>
 <span class="span"><router-link class="drop" to="/Sport" style="">Sport</router-link></span>
    <span class="span"><router-link class="drop" to="/Tech" style="">Technology</router-link></span>
   <span class="span"><router-link class="drop" to="/Health" style="">Health</router-link></span>
   <span class="span"><router-link class="drop" to="/Entertainment" style="Entertainment">Entertainment</router-link></span>
    
   <span class="span"><router-link class="drop" to="/Sceince" style="">Science</router-link></span>
    <span class="span"><router-link class="drop" to="/Stocks" style="">Ai</router-link></span>
   <span class="span"><router-link class="drop" to="/Crypto" style="">Crypto</router-link></span> 
   
  
</span> 
  </span>
<span class="dropdown dr">
  <span class="dropbtn news"><router-link class="forex-btn " to="/Business">FOREX</router-link></span>
  
</span>
<span class="dropdown dr">
   <span class="dropbtn crypto "><router-link class="articles-btn bt" to="/Tech">ARTICLES</router-link></span>
 
</span>
<span class="dropdown dr">
  <span class="dropbtn business-btn"><router-link class="video-btn bt" to="/Ai">VIDEO</router-link></span>
 

</span>


<span class="dropdown ai dr">
  <span class="dropbtn about-btn bt" id="open" @click="openBtn" style="color:white">AboutUS</span>
</span>
 <dialog  class="dialog">
  
  
  <div class="logo-modal">
    <img src="../../assets/e-good-news-1024x936.png" class="logo-nav">
   
  </div>
  
 
  <p>
    <strong style="font-size:28px;font-family:'Times New Roman', Times, serif;">Good News Express: Your Window to the World of News</strong><br/><br/><br/><br/>
<hr style="height:3px;color:#f39c12"/>
<router-link @click="closed" to="/Business" class="bz"><strong>Business:</strong></router-link>
Stay informed about the latest trends in the business world with Good News Express. We provide insights into key events, startups, investments, and economic forecasts. Our news will help you stay updated on business events and make informed decisions.<br/>

<router-link @click="closed" to="/Crypto"><strong>Cryptocurrencies:</strong></router-link>
The cryptocurrency world is constantly evolving, and we provide you with all the latest information on market developments, new coins, and blockchain technologies. Our articles and analyses will help you navigate the world of digital currencies.<br/>

<router-link @click="closed" to="/Sport"><strong>Sports:</strong></router-link>
From football to basketball, we deliver the freshest news on sporting events, teams, and stars. Our team of journalists keeps track of all the sports news to keep you in the loop.<br/>

<router-link @click="closed" to="/Science"><strong>Science:</strong></router-link>
Our journalists delve into the latest scientific discoveries and technological achievements. We provide you with articles on new research, medical breakthroughs, and scientific breakthroughs.<br/>

<router-link @click="closed" to="/Tech"><strong>Technology:</strong></router-link>
The world of technology is ever-changing, and we keep an eye on these changes. Our news on new gadgets, software, and technological innovations will keep you up to date with the latest tech trends.<br/>

<router-link @click="closed" to="/Entertainment"><strong>Entertainment:</strong></router-link>
For those looking for a dose of entertainment news, Good News Express has you covered. We bring you the latest updates on movies, music, celebrities, and pop culture.<br/>

<router-link @click="closed" to="/Health"><strong>Health:</strong></router-link>
Your health matters to us. We provide articles on wellness, medical advancements, and tips for a healthier lifestyle. Stay informed about the latest developments in the world of health.<br/>

<strong>Good News Express is your reliable source of news, delivering high-quality information in a convenient format. Our mission is to bring you only good news that matters to you.</strong>
  </p><br/>
  <button @click="close" class="btn-closed">closed</button>
</dialog> 



<span class="dropdown ai">
  <span class="dropbtn donate-btn bt" style="color:white">DONATE</span>
 
 
  <span class="dropdown-content grid-donate">
    
   
   <span class="span-donate" style="color:white"><img id="openBtc" @click="openBtnBtc" src="../../assets/bitcoin_94576.png">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
   
   
   
   
   
   
   
   
   
   
   
   
   
   <span class="span-donate" style="color:white"><img id="openEth" @click="openBtnEth" src="../../assets/eth-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95451.png">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
    <span class="span-donate" style="color:white"><img id="openUsdt" @click="openBtnUsdt" src="../../assets/usdt_cryptocurrencies_icon_188337.png">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
    <span class="span-donate" style="color:white"><img id="openPayPal" @click="openBtnPayPal" src="../../assets/paypal_512_icon-icons.com_75983.png">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
</span> 
</span>


<span class="dropdown ai">
  <span class="dropbtn contact-btn bt" style="color:white">CONTACT</span>
 
 
  <span class="dropdown-content grid-contact">
    
   <span> <input placeholder="Enter email"/></span>
   <span> <button>SEND</button></span>
    
    <span class="span-contact">Great Britain Baker Street221b London</span>
    <span class="span-contact"> </span>
    <span class="span-contact">goodnews@gmail.com</span>
</span> 
</span>

<span class="dropdown ai dr">
  <span class="dropbtn crypto-btn"><router-link class="login-btn bt" to="/Crypto">LOGIN</router-link></span>
 
</span>



 <img style="width:12px" @click="closed" class="bt-close" src="../../assets/1486564399-close_81512.png">
 
<!-- <span class="dropdown ai">
  <span class="dropbtn crypto-btn bt" ><img style="position:absolute;bottom:0px;top:0;" src="../../assets/youtube256px_87148.png"></span>
 </span>  -->

<!-- <img style="width:50px" src="../../assets/eps10-white-login-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-black-background-free-vector.jpg"> -->
</ul> 





<dialog  class="dialogUsdt">
  
  
  <div class="logo-modal">
    <img src="../../assets/e-good-news-1024x936.png" class="logo-nav">
   
  </div>
  
 
  <p>
   
    <img  src="../../assets/usdt_cryptocurrencies_icon_188337.png"><span class="adress">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
<hr style="height:3px;color:#f39c12"/></p>
<br/>

  <button @click="closedUsdt" class="btn-closed">close</button>
</dialog> 

<dialog  class="dialogPayPal">
  
  
  <div class="logo-modal">
    <img src="../../assets/e-good-news-1024x936.png" class="logo-nav">
   
  </div>
  
 
  <p>
   
    <img  src="../../assets/paypal_512_icon-icons.com_75983.png"><span class="adress">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
<hr style="height:3px;color:#f39c12"/></p>
<br/>

  <button @click="closedPayPal" class="btn-closed">close</button>
</dialog> 



<dialog  class="dialogBtc">
  
  
  <div class="logo-modal">
    <img src="../../assets/e-good-news-1024x936.png" class="logo-nav">
   
  </div>
  
 
  <p>
   
    <img  src="../../assets/bitcoin_94576.png"><span class="adress">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
<hr style="height:3px;color:#f39c12"/></p>
<br/>

  <button @click="closedBtc" class="btn-closed">close</button>
</dialog> 
<dialog  class="dialogEth">
 <div class="logo-modal">
    <img src="../../assets/e-good-news-1024x936.png" class="logo-nav">
  </div>
<p>
    <img  src="../../assets/eth-crypto-cryptocurrency-cryptocurrencies-cash-money-bank-payment_95451.png"><span class="adress">1MoeBM8Ys4DXa8Kntzz6LVyfjzUB2aHrT3</span>
<hr style="height:3px;color:#f39c12"/></p>
<br/>
 <button @click="closedEth" class="btn-closed">close</button>
</dialog> 

  </div>
 
</header>


<div class="nav-2">
 <div class="log">
    <!-- <img src="../../assets/e-good-news-1024x936.png" class="logo-nav"> -->
  </div>

   <div class="dialog-nav" >
  <button  class="bt-cl">Business</button>
  <button  class="bt-cl">Technology</button>
  <button  class="bt-cl">Sport</button>
  <button  class="bt-cl">Health</button>
  <button  class="bt-cl">Sciense</button>
  <button  class="bt-cl">Entertainment</button>
  <button  class="bt-cl">Crypto</button>
  <button  class="bt-cl">Forex</button>
 <button  class="bt-cl">Video</button>
 <button  class="bt-cl">Contact</button>
 <button  class="bt-cl">Articles</button>
 <button  class="bt-cl">About US</button>
 <button  class="bt-cl" style="width:80px">About </button>

</div>
 
</div> 



  
</template>
<script>
import search from '@/views/Select-2.vue'
import anime from '../../components/crypto/v-crypto-animation.vue'
import metall from '@/views/Ai.vue'
import stocks from '@/views/Stocks.vue'
import vCrypto6Kurs from '../crypto/v-crypto6-kurs.vue';
import vCrypto7Top from '../crypto/v-crypto7-top.vue';
import vCryptoAnimation2 from '../CryptoMainPage/v-crypto-animation-2.vue';
import Burger from '../gamburger/v-burger.vue'
export default {
  data(){
    return{
business:null
    }
  },
  components: {
    vCrypto6Kurs,
    vCrypto7Top,
    vCryptoAnimation2,
    Burger,
    stocks,
    metall,
    anime,
    search
  },
  methods:{
     openBtn ()
      {
        const dialog = document.querySelector('.dialog').style.display='block'
          
      },
      close(){
       const dialogClose = document.querySelector('.dialog').style.display='none'
       

      },
      openBtnBtc(){
         const dialogBtc = document.querySelector('.dialogBtc')
           dialogBtc.showModal()
        // console.log('hello')
      },
      closedBtc(){
        const dialogBtc = document.querySelector('.dialogBtc')
          dialogBtc.close()

      },
      openBtnEth ()
      {
        const dialogEth = document.querySelector('.dialogEth')
          dialogEth.showModal()
      },
      closedEth(){
        const dialogEth = document.querySelector('.dialogEth')
          dialogEth.close()

      },
      openBtnPayPal(){
         const dialogPayPal = document.querySelector('.dialogPayPal')
           dialogPayPal.showModal()
        // console.log('hello')
      },
      closedPayPal(){
        const dialogPayPal = document.querySelector('.dialogPayPal')
          dialogPayPal.close()

      },
      
      openBtnUsdt(){
         const dialogUsdt = document.querySelector('.dialogUsdt')
           dialogUsdt.showModal()
        // console.log('hello')
      },
      closedUsdt(){
        const dialogUsdt = document.querySelector('.dialogUsdt')
          dialogUsdt.close()

      },
      openNav ()
      {

const open = document.querySelector('.open').style.display="none" 
const closeOpen = document.querySelector('.bt-close').style.display="block"     
 const dialogNav = document.querySelector('.nav-2').style.display='block'
        //  dialogNav.showModal()
        
      },
      closed(){
        const dialogNav = document.querySelector('.nav-2').style.display="none"
        const closeClosed = document.querySelector('.bt-close').style.display="none"  
        const openOpen = document.querySelector('.open').style.display="block"
      },
      

    },
 
  }
  
</script>
<style lang="scss" scoped>
ul{
  display: grid;
  grid-template-columns: repeat(8,1fr);
}
button{
  padding: 10px;
  border: 1px solid white;
  color: white;
}
.logo-news{
  width: 200px;
  display: none;
  @media screen and (max-width: 500px){
    margin-top: 15px;
  }
}
.search{
  position: absolute;
  left:210px;
  top:0px;
  @media screen and (max-width: 550px){
    left:100px;
    top:70px;
  }
//   @media screen and (max-width: 400px){
//    left:0;
//   //  top:50px;
// }
}

.logo-news-hub{
  width: 200px;
  position: absolute;
  top:20px;
  left: 5px;
}
.bt-cl:hover{
  color:#01bba8; 
  background-color: black;
}
.bt-close{
  position: absolute;
  left:1270px;
  top:70px;
  width: 80px;
  color: red;
  display: none;
}
.bt-cl{
  background-color: #040d1d;
}
.nav-2{
  display: none;
//  background-color: #040d1d;
  position: fixed;
  top: 72px;
  z-index: 2;
}
.adress{
  color: white;
}
.bz{
  outline-style: none;
}
.logo-modal{
  position: absolute;
  left: 1120px;
  border-radius: 5px;
  background-image: linear-gradient(to right,#040d1d, #053684);
  width:100px
}

dialog p a{
  text-decoration: none;
  color: rgb(0, 0, 0);
}
dialog p{
  font-size: 18px;
  // font-weight: bold;
}
.btn-closed{
  outline: none;
  background-image: linear-gradient(to right,#040d1d, #091834);
  color: white;
}
.btn-closed:hover{
  background-image: linear-gradient(to right,#1f3b6d, #2967d8);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}
.dialog::backdrop{
  background-color:rgba(0, 0, 0, 0.5)
}
.dialog{
  z-index: 7;
  display: none;
  // background-color: #f39c12;
  color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  // z-index: ;
  top:0px;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  border:2px solid #f80313;
  // background-image: linear-gradient(to right,#040d1d, #053684);
}
.dialogBtc,.dialogEth,.dialogUsdt,.dialogPayPal{
  // background-color: #f39c12;
  color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: 3;
  top:200px;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
  background-image: linear-gradient(to right,#040d1d, #053684);
  left:450px;
}
.dialogBtc::backdrop{
  background-color:rgba(0, 0, 0, 0.5)
}
.span-contact{
  color:white;
  margin: 15px;
}
.grid-donate{
  // display: grid;
  // grid-template-columns: repeat(4,1fr);
  border:2px solid #f39c12;
  border-radius: 7px;
}
.grid-contact{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  padding: 10px;
  border-radius: 7px;
  border:2px solid #f39c12;

}
::placeholder{
  color: white;
}

.burger{
   position: absolute;
  left: -25px;
  top:45px;
  
}
.logo-nav{
  width: 100px;
  margin-left: 0px;
}

.drop:hover{
  // background-color:#102039;
  // color: white;
  text-decoration: underline;

}

h2{
  font-size: 45px;
}


.grid-nav{
  display: grid;
  grid-template-columns: 100px 1100px;
  margin-left: 300px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border:2px solid #f39c12;
  border-radius: 7px;
  // background-color: black;
  // color: white
}

.link-white {
  color: white;
}

/* drop */
.img-a {
  width: 220px;
  margin: 3px;
  height: 120px;
  border: solid rgb(133, 121, 121) 1px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
}

.dropbtn {
  margin-left: 15px;
  width: 340px;
  // background-color: #030303;
  // color: rgb(2, 2, 2);
  margin: 10px;
  font-size: 17px;
 
  border: none;
  cursor: pointer;

}
.bt{
  margin-top: 10px;
}


.dropdown {
  position: relative;
  display: inline-block;
  margin: 0px;
  height: 40px;

}


.dropdown-content {
  display: none;
  position: absolute;
 background-color: #040d1d;
  min-width: auto;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  padding: 3px;
  font-size: 18px;
  overflow: auto;
  border: 1px solid white;
  width: auto;
  margin-top: px;
}


.dropdown-content a {
  color: rgb(250, 248, 248);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}





.dropdown:hover .dropdown-content {
  display: grid;
  
}

a {
  text-decoration: none;
  color: rgb(250, 248, 248);
}
// .grid-news:hover{
//   display: grid;
//   grid-template-columns: repeat(5,1fr);
// }












p {
  color: black;
}









// .router {
//   text-decoration: none;
//   color: white;



// }

// .router:hover {
//   text-decoration: underline;
// }


// .router {
//   font-size: 17px;
//   // font-weight: bold;
// }

header {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #040d1d;
  border-bottom: 4px solid white;
  height: 70px;
  z-index: 5;
  

}


.brand {
  height: 100px;
// }
}

ul {
  font-family: 'Times New Roman', Times, serif;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  list-style-type: none;
  padding-top: 20px;
   margin-left: 200px;
  // margin-right: 15px;
}

nav {
  height: 50px;
  

}

.login-btn,
.home-btn,
.contact-btn,
.news-btn,
.donate-btn,
.about-btn,
.articles-btn,
.forex-btn,
.video-btn,
.sport-btn {
  // background-color: black;
  font-weight: 700;
  padding: px;
  font-family: 'Times New Roman', Times, serif;

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









.logo-nav{
  @media screen and (max-width: 700px){
    width: 107px;
    margin-top:px;
  }
}
.login-btn {
  @media screen and (max-width: 900px){
    display: none;
  }
  }
.contact-btn  {
  @media screen and (max-width: 900px){
    display: none;
  }
  }
  .donate-btn{
    @media screen and(max-width: 900px){
      display: none;
    }
  }
  .about-btn{
    @media screen and(max-width: 700px){
      display: none;
    }
  }
  .video-btn{
    @media screen and(max-width: 700px){
      display: none;
    }
  }
  .articles-btn{
    @media screen and(max-width: 700px){
     
      display: none;
    }
  }
  .forex-btn,.news-btn{
  @media screen and (max-width: 500px){
   display: none;
   
  }
  
  }
  
  



header{
  @media screen and(max-width: 550px){
    height: 170px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
}
.dropdown-content{
  @media screen and(max-width: 390px){
    right: 50px;
    top:85px;
  }
}
.grid-nav{
  @media screen and (max-width: 400px){
    margin-top: 10px;
  }
}
.logo-news-hub{
  @media screen and(max-width:500px){
    display: none;
  }
}
.logo-news{
  @media screen and(max-width:500px){
    display: block;
  }
}
</style>