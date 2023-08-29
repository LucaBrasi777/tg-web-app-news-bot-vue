<template lang="">
    <div class="wrap">
      
    
      
      <!-- <h2>Technology news</h2><hr/> -->
<div class="fixed">
<div class="grid">

  

  <div class="logo-health">
  <span> 
   <img id="mom-closed-2" class="tech-logo-2" src="../assets/HealthNews_cmyk.svg">
  </span> 
  </div>




  <div class="mom">
  <span> <button id="tech" class="bt" @click="del" ><img src='../assets/1486564399-close_81512.png'></button>
    <a class="link-mom" href="https://www.doktormom.ru/" target='_blank' id="buy"> <img id="mom-closed" class="tech-logo" src="../assets//mom_pack_ban_maz_right-page_0.png"></a>
  </span>
  </div>

   <!-- <a class="reklama-2" href="https://lekfarm.ua/ua/antibiotiki-v-kombinatsii-s-himioterapevticheskimi-sredstvami-mazi-11788/inflaraks-maz-tuba-50g-9961" target='_blank'><img class="img-reklama" src="../assets/inflarax.webp"></a>
   
    <a class="reklama-2" href="https://sanitas.ua/product/817" target='_blank'><img class="img-reklama" src="../assets/ReliefAdvance_cream_Front.avif"></a> -->
</div>
</div>
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
  // 2e9a3f2dafb44777a86c64914a83abf1 API health
  export default{
    data(){
      return{
        display:'none',
        color: 'blue',
        info2:null,
      //   alt:'https://assets.website-files.com/5ddfe807a73baddd985c1e6f/604fa038d8d5c63d1c304640_BOTS_Crypto_News_Website-Header.jpg'
     }
    },
    mounted(){
      axios
       .get('https://newsapi.org/v2/top-headlines?category=health&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
        // .get(' https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?TenantId=1&Language=52&Country=41&CategoryId=3&Page=1&PageSize=10')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  }
,
methods: {
  del(){
  document.getElementById('mom-closed').style.display='none'
  document.getElementById('tech').style.display='none'
  
  },
  delTwo(){
  document.getElementById('mom-closed-2').style.display='none'
  document.getElementById('tech-2').style.display='none'
  
  },
  delThree(){
  document.getElementById('mom-closed-3').style.display='none'
  document.getElementById('tech-3').style.display='none'
  
  }
  
},
}
    
  </script>
  <style  lang="scss" scoped>
  .bt,.link-mom,.tech-logo{
    position: fixed;
  }
  .mom{
    padding: 0;
  }
  #buy{
    text-decoration: none;
    color: black;

  }
  .bt{
    
  }
.text {
  color: v-bind(color);
  display: v-bind(display);
}







  .fixed{
   margin-top: 40px;
    
   
  }
  .reklama,.reklama-2{
    // background-color: antiquewhite;
    
    // max-height: 120px;
  }
.img-reklama{
  // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  max-height: 200px;
  margin-top: 0px;
  margin-left: 100px;
  // width: 300px;
  // background-image:url('https://root.tblcdn.com/_images/goods/6133a97f-72cb-4259-9696-fd900cb14de8/1/AAAAAAiOTY/img_original_0.jpg')
}

  .grid {
	display: grid;
	grid-template-columns:repeat(2,1fr);
	grid-template-rows: 100px 100px ;
	/* grid-column-gap: 20px; */
	/* grid-row-gap: 50px; */
	/* grid-gap: 50px 20px; */
	grid-gap: 20px;
  height: 120px;
}

.tech-logo{
    width: 100px;
    margin-top: 25px;
    // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    
  }
  .tech-logo-2,.tech-logo-3{
    width: 200px;
    margin-top: 0px;
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
    height: 180px;
   
    
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
.grid{
  // @media screen and(max-width: 900px){
  //   grid-template-columns: repeat(1,1fr);

  // }
  @media screen and(max-width: 400px){
    grid-template-columns: repeat(1,1fr);

  }

}
  }
  .tech-logo-2{
    @media screen and (max-width: 400px){
      width: 150px;
    }
  }
  </style> 
  
  
  
  