<template lang="">
    <div class="wrap">

     <div class="grid">

      <div class="logo">
      <img class="tech-logo" src="../assets/TNW-Logo-580x200-1.png">
      </div>

      <div class="reklama">
      <button id="tech-closed" class="bt" @click="del" ><img src='../assets/1486564399-close_81512.png'></button><br/>
      <a class="link-mom" href="https://www.foxtrot.com.ua/" target='_blank' id="buy"> <img  id="tech" src="../assets/fokstrot.png"></a>
      </div>

     </div>
     <hr/>


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
  // 1fb27fc9978d48ecadb4bdc77705325e API tech


  export default{
    data(){
      return{
        info2:null,
      //   alt:'https://assets.website-files.com/5ddfe807a73baddd985c1e6f/604fa038d8d5c63d1c304640_BOTS_Crypto_News_Website-Header.jpg'
     }
    },
    mounted(){
      axios
       .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=100')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  },
  methods: {
  del(){
  document.getElementById('tech-closed').style.display='none'
  document.getElementById('tech').style.display='none'
  
  }

}}
    
  </script>
  <style  lang="scss" scoped>
  .grid{
    display: grid;
     grid-template-columns: 400px 700px;
  }
  #tech{
    position: fixed;
    width: 600px;
    margin-top: 50px;
  }
  .bt{
    margin-top: 35px;
    position: fixed;
    width: 30px;
    height: 50px;
  }
  .tech-logo{
    width: 200px;
    margin-top: 60px;
  }
  h2{
    margin-top: 50px;
  }
  .wrap{
    margin-left: 20px;
    margin-right: 20px;
  }
  .col-4-grid{
     margin-top: px;
     }
   .col-4-grid__block-grid{
    display: grid;
    grid-template-columns:repeat(4,1fr);
    margin-top: 30px;
    }
  .img{
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      margin:5px; 
    width: 290px;
   
    
  }
  .col-grid-4__block-grid-content-paragraph{
    
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
  .grid{
    @media screen and (max-width:900px){
      grid-template-columns: repeat(1,1fr);
      margin-left:100px ;

    }
    @media screen and (max-width:900px){
      
      margin-left:30px ;

    }
  }
  #tech{
    @media screen and(max-width: 600px){
      width: 400px;
    }
    @media screen and(max-width: 400px){
      width: 300px;
    }
  }
  </style> 
  
  
  
  