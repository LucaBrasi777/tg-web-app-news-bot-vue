<template lang="">
    <div class="mb-3">
                        <div class="section-title mb-0">
                           <h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                       </div>
                      
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
        
        const pageSize = 12;
        
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=6&Language=14&Page=1&PageSize=${pageSize}`
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