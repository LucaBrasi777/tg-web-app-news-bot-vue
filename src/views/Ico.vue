<template lang="">


<!-- :value="article.id" -->
<!-- <br/><br/><br/>
  <div> 
    <div class="div-select select"  @change="fetchSelectedArticle" >
      <option v-for="article in info"  :key="article" class="option">
         <a class="link" :href="article.url" target="_blank "> {{ article.title }}</a>
      </option>
   </div> -->
<!-- {{info}} -->
     <!-- <div v-if="selectedInfoData">
      <h2>{{ selectedInfoData.title }}</h2>
      <p>{{ selectedInfoData.content }}</p>
      
    </div> -->
   
  <!-- </div>  -->









    <div>
      <iframe
      class="video bbc"
      width="280" 
      height="155" 
      src="https://www.youtube.com/embed/pF60NxipEpE?si=rtCUzkVuT5ixKyAd" 
      title="YouTube video player" 
      frameborder="0"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>
       
       <iframe 
       class="video cbc"
       width="280" 
       height="155" 
       src="https://www.youtube.com/embed/J_d8IAfsUGk?si=-vufpUWhs0_Qn_WC" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>

       <iframe 
       class="video fox"
       width="280" 
       height="155" 
       src="https://www.youtube.com/embed/36s3Zz8Nsh8?si=N7EsXEdA62IQWiaT" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>

       <iframe 
       class="video nbc"
       width="280" 
       height="155" 
       src="https://www.youtube.com/embed/yY-2ZOT1W3M?si=aoSCXB2668Nho5LI" 
       title="YouTube video player" 
       frameborder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowfullscreen></iframe>

       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/5c2g_5I40rk?si=9wvTy-wTH96-aOdF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/iYofZEoYEMQ?si=gnx_Mh7zmvY0Fx4o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/c-X6KK4D8GQ?si=cWgjuMtIjiX7uB9z" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/cJBtQx9nD-s?si=9KkC77JV5eePWDEV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/fGmXD7NPftY?si=YFtm8MVObjVfW9kR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/2AXvuhlVFjQ?si=a3z1EelJdsNQCbCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/GqhQQdUFYCQ?si=SbUWIuqUs3-yti8X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       <iframe class="video" width="280" height="155" src="https://www.youtube.com/embed/2fGfhvCXX8s?si=_llEQvMe_OG8mK9s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
 
 </div> 
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      articles:[],
      info: [],
      selectedInfo: null,
      selectedInfoData: null
    };
  },

  









  methods: {
    async fetchInfo() {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100'); // Замените 'API_URL' на фактический URL вашего API
        const data = await response.json();
        this.info = data.articles;
      } catch (error) {
        console.error('Ошибка при получении статей:', error);
      }
    },
    async fetchSelectedInfo() {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100/${this.selectedArticle}`);
        const data = await response.json();
        this.selectedInfoData = data.article;
      } catch (error) {
        console.error('Ошибка при получении выбранной статьи:', error);
      }
    }
  },
  mounted() {
    this.fetchInfo();
  }
};
</script>

<!--  -->



<style lang="scss" scoped>


div{
   display: grid;
   grid-template-columns: repeat(4,1fr);
   margin-top: 50px;
   margin-left: 25px;
   margin-right: 25px;
}
  
  .video{
   margin: 7px;
   box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);}

   div{
      @media screen and (max-width:900px){
         grid-template-columns: repeat(3,1fr);
      }
      @media screen and (max-width:700px){
         grid-template-columns: repeat(2,1fr);
      }
      @media screen and (max-width:500px){
         grid-template-columns: repeat(1,1fr);
      }
   }
   .video{
      @media screen and(max-width:700px){
         width: 330px;
      }
      @media screen and(max-width:500px){
         width: 460px;
         height: 280px;
      }
   }
</style>