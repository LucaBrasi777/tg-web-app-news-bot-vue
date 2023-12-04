<template lang="">
    <div class="mb-3"
    v-for="item in articles" :key="item"
  
    >
                        <div class="section-title mb-0">
                            
                            <p class="" style="font-size:16px" > <span class="fw-bold" style="font-size:20px"><a class="text-primary" :href="item.url" target="_blank">{{item.title}}</a></span><br/>{{item.explanation}}</p>
                          </div>
                        
                        <div class="bg-white text-center   p-3">
                          
                              <img class="img-fluid " v-if = "item.hdurl" :src="item.hdurl" style="object-fit: cover;">
                                    <img class="img-fluid " v-else :src=" image" style="object-fit: cover;">
                                   
                        </div>
                    </div>
</template>
<script>
export default {
    data() {
       return {
        image:'https://storeassets.im-cdn.com/products/75aad3/A2Q7V2ItTlC9F1IEOLEq_ZuSg7rUg_400x400.jpg',
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
        
        // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
         //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
         const pageSize = 100;
         
         try {
           const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100'
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
</style>