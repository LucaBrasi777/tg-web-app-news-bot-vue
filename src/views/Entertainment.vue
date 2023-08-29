<template lang="">
    <div class="wrap">
      
      <!-- <h2>Entertainment</h2><hr/> -->
      <img class="entertainment-logo" src="../assets/E!_News_current_logo.png"><hr/>
    <!-- <section class="col-4-grid">
        <div class="col-4-grid__block">
        <div class="col-4-grid__block-grid"
       
        >
          <div class="col-grid-4__block-grid-content"
          v-for="item in info2"
        :key="item">
            <img class="col-grid-4__block-grid-content-image img" :src='item.urlToImage' :alt='alt'>
            <p class="col-grid-4__block-grid-content-paragraph">
              <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank "> {{ item.title }} </a>
            </p>
          </div>
         
        </div>
      </div>
    
  </section>  -->

  <section class="col-4-grid">
        <div class="col-4-grid__block">
        <div class="col-4-grid__block-grid"
       
        >
          <div class="col-grid-4__block-grid-content"
          v-for="item in info2"
        :key="item">
            <img class="col-grid-4__block-grid-content-image img" :src='item.urlToImage' :alt=' alt'>
            <p class="col-grid-4__block-grid-content-paragraph">
              <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank ">
                 {{ item.title }} </a>
            </p>
          </div>
         
        </div>
      </div>
    
  </section> 



    </div>
  </template>
  <script>
  import axios from 'axios'
  // eb237649c2594555a26f68e392086d40 API entertainment
  export default{
    data(){
      return{
        info2:null,
        
      }
    },


    mounted(){
      axios
       .get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
        // .get(' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?TenantId=1&Language=52&Country=41&CategoryId=3&Page=1&PageSize=10')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  }


  //   mounted(){
  //     axios
  //      .get('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
  //     // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
  //      .then(response=>{
  //          this.info2 = response.data.articles
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //     })
  // }
}
    
  </script>
  <style  lang="scss" scoped>










  .entertainment-logo{
    width: 100px;
    margin-top: 50px;
  }
  h2{
    margin-top: 50px;
  }
  .wrap{
    margin-left: 20px;
    margin-right: 20px;
  }
  .col-4-grid{
     margin-top: 50px;
     }
   .col-4-grid__block-grid{
    display: grid;
    grid-template-columns:repeat(4,1fr);
    margin-top: 30px;
    }
  .img{
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
       margin: 5px;
    width: 290px;
   /* margin-right: 20px;
   margin-left: 20px; */
    
  }
  .col-grid-4__block-grid-content-paragraph{
    /* margin-right: 20px;
   margin-left: 20px; */
   font-size: 14px;
width: 270px;
margin: 8px;
   /* padding-left: 10px;
    padding-right: 10px; */
  }
  .col-grid-4__block-grid-content-paragraph-link{
    text-decoration: none;
    color: black;
    width: 200px;
    font-weight: bold;
    }
    .col-grid-4__block-grid-content-paragraph-link:hover{
    text-decoration: underline;
  }


  // @media
  .col-4-grid__block-grid{
    @media screen and(max-width: 900px)
    {display: grid;
    grid-template-columns:repeat(3,1fr);
    margin-top: 30px;}
    @media screen and(max-width: 600px)
    {display: grid;
    grid-template-columns:repeat(2,1fr);
    margin-top: 30px;}
    @media screen and(max-width: 400px)
    {display: grid;
    grid-template-columns:repeat(1,1fr);
    margin-top: 30px;}
    }
  .img{
    @media screen and(max-width:900px){
      width: 300px;
    }
    @media screen and(max-width:600px){
      width: 300px;
    }
    @media screen and(max-width:400px){
      width: 360px;
    }
  }
  .col-grid-4__block-grid-content-paragraph{
@media screen and (max-width:900px){
  width: 300px;
  font-size: 16px;
  
}
@media screen and (max-width:400px){
  width: 350px;
  font-size: 16px;
  
}
  }
  </style> 
  
  
  
  