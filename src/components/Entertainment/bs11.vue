<template lang="">
    <div class="mb-3"
    v-for="(item, index) in articles.slice(85)" :key="index"
  
    >
                        <div class="section-title mb-0">
                            <a class="m-0 text-uppercase font-weight-bold text-danger"  :href="item.url" target="_blank">{{item.title}}</a>
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
        image:'https://www.orientsoftware.com/Themes/OrientSoftwareTheme/Content/Images/blog/2022-12-27/ai-in-entertainment.jpg',
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
        
         const pageSize = 90;
         
         try {
           const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=6&Language=14&Page=5&PageSize=${pageSize}`
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
a{
  text-decoration: none;
  color: white;
}
  a:hover{
    text-decoration: underline;

  }  
</style>