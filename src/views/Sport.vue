<template lang="">
    <div class="wrap">

      <!-- <div class="div-block-9">
      <div  data-video-urls="videos/1071119503-preview-transcode.mp4,videos/1071119503-preview-transcode.webm" 
      data-autoplay="true" 
      data-loop="true" 
      data-wf-ignore="true" 
      class="w-background-video w-background-video-atom video">
      <video id="44976736-4e8d-ad55-d8d3-ab40e8a976da-video" 
       class="video"
      autoplay="" 
      loop="" 
      style="width:100%" 
      muted="" 
      playsinline="" 
      data-wf-ignore="true" 
      data-object-fit="cover">
          <source src="../videos/istockphoto-1097906834-640_adpp_is.mp4" data-wf-ignore="true">
          <source src="../videos/istockphoto-1097906834-640_adpp_is.mp4" data-wf-ignore="true">
        </video></div>

    </div> -->


<img class="sport-logo" src="../assets/sport-news-logo.png"><hr/>
    <!-- <h2>Sport</h2><hr/> -->
    <section class="col-4-grid">
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
    
  </section> 



    <!-- <section class="col-4-grid">
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
  
</section>  -->
















       
 </div>
</template>



<script>
import axios from 'axios'
// 2e9a3f2dafb44777a86c64914a83abf1 API sport
export default{
  data(){
    return{
      info2:null
    }
  },
  mounted(){
      axios
       .get('https://newsapi.org/v2/top-headlines?category=sports&language=en&apiKey=1fb27fc9978d48ecadb4bdc77705325e&pageSize=100')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  }}
  
</script>
<style lang="scss" scoped>
.sport-logo{
  width: 300px;
}
li{
  margin-left: 20px;
}
    .wrap{
        padding-left: 20px;
        padding-right: 20px;
        margin-top: 50px;
        font-weight: bold;
    }
    .img{
        width: 100%;
    }
   
   img{
    width: 500px;
   } 
   .defi-logo{
    display: grid;
    grid-template-columns: repeat(2,1fr);
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

}
.col-grid-4__block-grid-content-paragraph{
 margin: 10px;
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