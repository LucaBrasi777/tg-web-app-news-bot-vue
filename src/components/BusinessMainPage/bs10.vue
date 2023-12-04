<template lang="">
    <div class="bg-dark">
                        <div class="section-title mb-0  bg-dark">
                           <h4 class="m-0 text-uppercase font-weight-bold text-white">Stocks</h4>
                       </div>
                      
                       <stocks/>
                       <div class="bg-dark border border-top-0 p-3 ">
                       
                           
                           <!-- <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #52AAF4;">

                               <span class="font-weight-bold"><router-link style="text-decoration:none;color:white" to="/Crypto">Crypto</router-link></span>
                           </a>
                           -->
                           <!-- <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #DC472E;">
                              
                               <span class="font-weight-bold">Sport</span>
                           </a>
                           <a href="" class="d-block w-100 text-white text-decoration-none rounded" style="background: #055570;">
                              
                               <span class="font-weight-bold">General</span>
                           </a> -->
                       </div> 
                   </div>
                 
</template>
<script>
import stocks from '../../views/Stocks.vue'
export default {
  components:{stocks},
   data() {
      return {
        articles: [],       
        currentPage: 1,   
        totalPages: 1,   
        rows: 12,        
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
       
        //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
        //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
        const pageSize = 12;
        
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
          );
          const data = await response.json();
          return data.items;
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
span{
 padding: 15px;
 font-size: 20px;
}
a{
   text-decoration: none;
   color: black;
}
a:hover{
 text-decoration: underline;
}
.rounded{
               border: none !important;
               box-shadow: none !important;
           }
           .album{
               background-color: transparent !important;
           }
           .d-none {
   display: block !important;
   @media screen and(max-width: 991px){
       display: none !important;
       }

}
   p{
       @media screen and(max-width: 1200px){
           display: none;
       }
       @media screen and(max-width: 991px){
           display: block;
       }
   }
</style>