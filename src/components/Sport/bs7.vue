<template lang="">
  
    <div class="mb-3"
    v-for="(item, index) in articles.slice(85)" :key="index"
  
    >
                        <div class="section-title mb-0">
                            <a style="font-size:20px" class="m-0 text-uppercase font-weight-bold text-black"  :href="item.url" target="_blank">{{item.title}}</a>
                        </div>
                        <div class="bg-white text-center   p-3"> 
                          
                              <img class="img-fluid " v-if = "item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
                                    <img class="img-fluid " v-else :src="image " style="object-fit: cover;">
                                   
                        </div>
                    </div>
</template>
<script>
export default {
    data() {
       return {
        image:'https://www.shutterstock.com/image-photo/multi-sports-proud-players-collage-260nw-549133762.jpg',
         articles: [],       
         currentPage: 1,    
         totalPages: 1,    
         rows: 11,          
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
        
         const pageSize = 100;
         
         try {
           const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=10&Language=14&Page=1&PageSize=${pageSize}`
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
         // Go to the previous page
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
</style>