
<template lang="">
   <div>

   
  </div>

  
   
    <div class="mb-3"
    v-for="(item, index) in articles" :key="index"
  
    >
                        
    <img class="img-fluid " v-if = "item.hdurl" :src="item.hdurl" style="object-fit: cover;">
    <img class="img-fluid " v-else :src="image " style="object-fit: cover;">
                                   
    <div class="section-title mb-0">
                            <a   class="m-0 text-uppercase font-weight-bold text-black a"  :href="item.url" target="_blank">{{item.title}}</a>
                           
                          </div>
                        <div class="bg-white text-center body   p-3"> 
                          
                     <div v-if="item.explanation"  >   <p class="a " style="font-size:16px" > {{item.explanation}}</p></div>
                     <div v-else  >   <p class="a " style="font-size:16px" >{{text}}</p></div>
                       
                      
                       
                       
                        </div>
                    </div>
</template>
<script>
export default {
    data() {
       return {
        image:"https://www.ixbt.com/img/n1/news/2023/8/1/OpenConstellation-1200x675_large.jpg",
         articles: [],       
         currentPage: 1,    
         totalPages: 1,     
         rows: 11, 
         text:'Hub News are your trusted source for up-to-the-minute news covering the world of cryptocurrencies and the dynamic realm of business. Our mission is to provide our readers with the freshest and most reliable information needed to make informed decisions in the fields of investment, finance, and technology Hub News monitor the latest developments in the cryptocurrency world, analyze the market, and provide reviews of leading digital assets. Whether youre an experienced trader or a newcomer to the crypto space, our content will help you stay informed about crucial events.'
      

     
       };
     },
     computed: {
       paginatedArticles() {
        
         const start = (this.currentPage - 1) * this.rows;
         const end = start + this.rows;
         return this.articles.slice(start, end);
       },
     },
     methods: {
       async getData() {
         
        // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
         //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
         const pageSize = 95;
         
         try {
           const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=22'
           );
           const data = await response.json();
           return data;
         } catch (error) {
           console.error('Error fetching news:', error);
           return [];
         }
       },
       async fetchNews() {
        
         const articles = await this.getData();
         this.articles = articles;
         this.totalPages = Math.ceil(articles.length / this.rows);
       },
       nextPage() {
        
         if (this.currentPage < this.totalPages) {
           this.currentPage++;
         }
       },
       prevPage() {
         
         if (this.currentPage > 1) {
           this.currentPage--;
         }
       },
     },
     mounted() {
       
       this.fetchNews();
     }, 
}
</script>
<style lang="scss" scoped>
a{
  text-decoration: none;
  color: white;
}
  a:hover{
    text-decoration: underline;

  } 
  .body{
    overflow-x:hidden;
    overflow-y: auto;
    height: 300px;
    } 
    
</style>