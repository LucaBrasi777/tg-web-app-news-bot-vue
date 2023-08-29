<template lang="">
    <div class="wrap">
      <!-- <h2>Technology news</h2><hr/> -->
      <img class="tech-logo" src="../assets/ScienceCollegeLogo.svg.png"><hr/>
    <section class="col-4-grid">
        <div class="col-4-grid__block">
        <div class="col-4-grid__block-grid"
       
        >
          <div class="col-grid-4__block-grid-content"
          v-for="item in info2"
        :key="item">
            <img class="col-grid-4__block-grid-content-image img" :src='item.urlToImage' :alt=' alt'>
            <p class="col-grid-4__block-grid-content-paragraph">
              <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank "> {{ item.title }} </a>
            </p>
          </div>
         
        </div>
      </div>
    
  </section> 
    </div>
  </template>
  <script>
  import axios from 'axios'
  // 2e9a3f2dafb44777a86c64914a83abf1 API sceince
  export default{
    data(){
      return{
        info2:null,
      //   alt:'https://assets.website-files.com/5ddfe807a73baddd985c1e6f/604fa038d8d5c63d1c304640_BOTS_Crypto_News_Website-Header.jpg'
     }
    },
    mounted(){
      axios
       .get('https://newsapi.org/v2/top-headlines?category=science&language=en&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=100')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  }}
    
  </script>
  <style  lang="scss" scoped>
  .tech-logo{
    width: 100px;
    margin-top: 40px;
  }
  h2{
    margin-top: 50px;
  }
  .wrap{
    margin-left: 20px;
    margin-right: 20px;
  }
  .col-4-grid{
     margin-top: 0px;
     }
   .col-4-grid__block-grid{
    display: grid;
    grid-template-columns:repeat(4,1fr);
    margin-top: 0px;
    }
  .img{
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      margin:5px; 
    width: 290px;
   
    
  }
  .col-grid-4__block-grid-content-paragraph{
    margin: 8px;
   font-size: 14px;
width: 270px;
   
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
  
  
  
  