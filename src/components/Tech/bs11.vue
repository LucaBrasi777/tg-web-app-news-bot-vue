<template lang="">
  <div></div>
</template>
<script>
export default {
  data() {
     return {
      image:'https://media.nature.com/lw1024/magazine-assets/d41586-018-01021-5/d41586-018-01021-5_15387858.jpg',
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
       
       const pageSize = 50;
       
       try {
         const response = await fetch(
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=11&Language=14&WithImageOnly=true&Page=5&PageSize=${pageSize}`
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