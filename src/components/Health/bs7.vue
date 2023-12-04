<template lang="">
  
    <div class="mb-3"
    v-for="(item, index) in articles.slice(71)" :key="index"
  
    >
                        <div class="section-title mb-0">
                            <a style="font-size:15px" class="m-0 text-uppercase font-weight-bold text-black"  :href="item.url" target="_blank">{{item.title}}</a>
                        </div>
                        <div class="bg-white text-center   p-3"> 
                          
                              <img class="img-fluid " v-if = "item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
                                    <img class="img-fluid " v-else :src=" image" style="object-fit: cover;">
                                   
                        </div>
                    </div>
</template>
<script>
export default {
    data() {
       return {
        image:'https://www.sesankareem.com.ng/wp-content/uploads/2017/01/Health.jpg',
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
         
         const pageSize = 88;
         
         try {
           const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=${pageSize}`
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