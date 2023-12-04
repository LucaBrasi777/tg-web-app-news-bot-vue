<template lang="">
  
    <div class="mb-3"
    v-for="(item,index) in articles.slice(23)" :key="index"
  
    >
                        <div class="section-title mb-0">
                            <a style="font-size:16px" class="m-0 text-uppercase font-weight-bold text-black text"  :href="item.url" target="_blank">{{item.title}}</a>
                       <img :src="item.source_info.img" style="width:18px">
                          </div>
                        <div class="bg-white text-center   p-3"> 
                         <div class="card-body">
                          <span class="fw-bold" >{{item.body}}</span>
                             </div>
                         <img class="img-fluid " v-if = "item.imageurl" :src="item.imageurl" style="object-fit: cover;">
                                    <img class="img-fluid " v-else src=" #" style="object-fit: cover;">
                                   
                        </div>
                    </div>
</template>
<script>

export default {
  data() {
      return {
        articles: [],
        articles2: [],
        currentPage: 1,  
               totalPages: 1,  
        rows:1,
        
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
               
       
             
               const pageSize = 52;
               
               try {
                 const response = await fetch(
                  // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
                  'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'

                 );
                 const data = await response.json();
                 return data.Data;
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


          formatDateTime(dateTime) {
          const options = {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }
          return new Date(dateTime).toLocaleString(undefined, options); },
          
          
          
          
  
  
  
  
  
  
  
        },
        mounted() {
          this.fetchNews();
         
          
          
         
      
      
        },
}
</script>
<style lang="scss" scoped>
.card-body{
    overflow-x: hidden;
    overflow-y: auto;
    height: 200px;
  }
a{
  text-decoration: none;
  color: white;
}
  a:hover{
    text-decoration: underline;

  }  
  .text{
    @media screen and(max-width:300px){
      font-size:15px
    }
  }
</style>