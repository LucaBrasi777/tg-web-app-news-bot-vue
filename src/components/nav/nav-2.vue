<template lang="">
    <div class="container-fluid p-0">
      <!-- <input 
                    v-model="searchT" 
                    placeholder="Search news" 
                    v-on:input="onSearchType"  
                    class="form-control input bg-black"  
                    aria-label="Search"
                    type="text"> -->
        <nav class="navbar navbar-expand-lg bg-black navbar-dark py-2 py-lg-0 px-lg-5">
         
         
         
          
         
          <bread/>
          <div class="nav-item dropdown mt-3">
                        <a href="#" class=" dropdown-toggle home" data-toggle="dropdown" style="color:white;font-size:12px">Location</a>
                        <ul class="dropdown-menu rounded-0  bg-black" style="">
                          <!-- <li @click="closedHome"> <router-link  to="/General" href="#" class="">General</router-link></li>
                          
                           <li @click="closedHome"> <router-link to="/Tech" href="#" class="">Technology</router-link></li>
                           <li @click="closedHome"> <router-link to="/Sport" href="#" class="">Sport</router-link></li>
                           <li @click="closedHome"> <router-link to="/Health" href="#" class="">Health</router-link></li>
                           <li @click="closedHome"> <router-link to="/Science" href="#" class="">Science</router-link></li>
                           <li @click="closedHome"> <router-link to="/Entertainment" href="#" class="">Entertainment</router-link></li>
                           <li @click="closedHome"> <router-link to="/Crypto" href="#" class="">Crypto</router-link></li> -->
                           <li><geo/></li>
                        </ul>
                        
                    </div>
          <a href="" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-4 h1 text-uppercase text-primary"> <img class=" m-0 display-4" style="width:100px" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd"></h1>
                <!-- <img class="msj m-0 display-4" style="width:150px" src="https://www.innovatorslink.com/wp-content/uploads/2020/09/msj-logo-2-full-white-420x187.png"> -->
               
              </a>

            <button type="button" style="" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span style="" class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0 mt-5">
                    <router-link  @click="openHome" to="/" href="#" class="   home" style="color:white">Home</router-link>
                    <router-link  @click="closedHome" to="/General" href="#" class="   home" style="color:white">Main</router-link>
                     <router-link  @click="closedHome" to="/Business" href="#" style="color:white" class="">Business</router-link>
                     <router-link  @click="closedHome" to="/Tech" href="#" style="color:white" class="">Technology</router-link>
                     <router-link  @click="closedHome" to="/Sport" href="#" style="color:white" class="">Sport</router-link>
                     <router-link  @click="closedHome" to="/Health" href="#" style="color:white" class="">Health</router-link>
                     <router-link  @click="closedHome" to="/Science" href="#" style="color:white" class="">Science</router-link>
                     <router-link  @click="closedHome" to="/Entertainment" href="#" style="color:white" class="">Entertainment</router-link>
                    <router-link  @click="closedHome" to="/Crypto" href="#" style="color:white" class="">Crypto</router-link>
                     <!-- <router-link  @click="closedHome" to="/Business" href="#" style="color:white" class="">Crypto</router-link>
                    -->
                    
                    
                    <!-- <a href="single.html" class="nav-item" style="color:white">Blog</a> -->
                    <!-- <a href="contact.html" class="nav-item nav-link">Contact</a>
                    <a href="category.html" class="nav-item nav-link">Video</a>
                    <a href="single.html" class="nav-item nav-link">Articles</a>
                   
                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                -->

               
                    
               
               
                </div>
               
            </div>
           <!-- <img class="msj" style="width:130px" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd"> -->
        </nav>
        <!-- <ol class="list-group list-group-numbered"
            v-for="item in news"
            :key="item"
            >
  <li class="list-group-item">{{item.title}}</li>
  
</ol> -->

<div class="wrap">
<div class="div "> 
    <button @click="searchClose" class="close">
        <img style="width:12px" 
        src="https://freesvg.org/img/close-button.png">
    </button> 
  
  <div v-for="item in news"
  
  :key="item">
  

  <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
 <img class="img-fluid w-100" v-else src="#" style="object-fit: cover;">
                               
 <a class="title" :href="item.url" 
         target="_blank ">
         {{item.title}}</a><br/><hr/>
      
  
  </div> 
  </div>
</div>


        <span class="marquee"
v-for="item in news2"
:key="item"
>

      <p>
        <!-- <img style="width:200px" :src="item.urlToImage"/> -->
        
        
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span>
      <input 
                    v-model="searchT" 
                    placeholder="Search news" 
                    v-on:input="onSearchType"  
                    class="form-control input bg-black"  
                    aria-label="Search"
                    type="text">
    </div>
   
</template>
<script>
// 1fb27fc9978d48ecadb4bdc77705325e API tech
import geo from '../../components/GeoApi.vue'
import bread from '../Bread/breadCrums.vue'
import axios from "axios";
export default {
  components:{bread,geo},
  data() {
    return {
      news: [],
      searchT: "",
      news2: [],
    };
  },
  mounted() {
    axios
      .get(
        "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=1"
      )
      .then((response) => {
        this.news2 = response.data.items;
      })
      .catch((error) => {
        console.log("error");
      });
  },
  methods: {
    openHome(){
    const open = document.getElementById('home').style.display="block"
    },
    closedHome(){
    const close = (document.getElementById('home').style.display="none")
    },
    onSearchType: function () {
      const search = (document.querySelector(".div").style.display = "block");
      var url =
        "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=100" +
        "&q=" +
        this.searchT;

      axios
        .get(url)
        .then((response) => {
          this.news = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    searchClose() {
      const searchClosed = (document.querySelector(".div").style.display =
        "none");
        const searchClosed2 = (document.querySelector(".input").value ='');
    },
  },
};
</script>
<style lang="scss" scoped>
.span{
  font-size: 10px;
}
.h1{
  font-family: cursive;
  font-size: 40px;

}
::placeholder{
  color: white;
}
.form-control{
  color: white;
  background-color: black;
  box-shadow: none !important;
  // border: none !important;
  
}


a{
  color: black;
  text-decoration: none;
  margin: 15px;
}
.marquee {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 0, 0);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 100;

  padding: 5px 0;
}

.marquee p {
  display: inline-block;
  padding-left: 100%; /* Push the text off the screen */
  animation: marquee 45s linear infinite; /* Adjust the animation duration as needed */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.input{
  // width: 170px;
  
}
.close{
  position: fixed;
  left:258px;
  top:105px;
 }
.div {
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  position: fixed;
  border: 2px solid white;
  display: none;
  width: 270px;
  margin-left: px;
  margin-right: 30px;

  border-radius: 5px;

  top: 110px;
  padding: 20px;

  height: 515px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  color: rgb(3, 3, 3);
  z-index: 5000;
  //   display: none;
  @media screen and (max-width: 767px) {
  }
}
.title{
    color: black;
    text-decoration: none;
}
.msj{
  box-shadow: none;
  @media screen and(max-width:1150px){
    display: none;
  }
}
</style>