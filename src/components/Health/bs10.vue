<template lang="">
    <div class="mb-3">
                        <div class="section-title mb-0">
                           <h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                       </div>
                      
                           <!--    <span class="font-weight-bold">Stocks</span>
                           </a>
                           <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #52AAF4;">
                             
                               <span class="font-weight-bold">Crypto</span>
                           </a>
                           <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #0185AE;">
                              
                               <span class="font-weight-bold">Articles</span>
                           </a>
                           <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #C8359D;">

                               <span class="font-weight-bold">Forex</span>
                           </a>
                           
                       </div>  -->
                   </div>
                 
</template>
<script>
export default {
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
        // Fetch articles from the News API
        //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
        //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
        const pageSize = 12;
        
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=8&Language=14&Page=1&PageSize=${pageSize}`
          );
          const data = await response.json();
          return data.items;
        } catch (error) {
          console.error('Error fetching news:', error);
          return [];
        }
      },
      async fetchNews() {
        // Fetch news and update component data
        const articles = await this.getData();
        this.articles = articles;
        this.totalPages = Math.ceil(articles.length / this.rows);
      },
      nextPage() {
        // Go to the next page
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
      prevPage() {
        // Go to the previous page
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
    },
    mounted() {
      // Fetch news data when the component is mounted
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