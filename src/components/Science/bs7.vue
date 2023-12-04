<template lang="">
  
    <div class="mb-3"
    v-for="(item, index) in uniqueArticles.slice(50)" :key="index"
  
    >
                        <div class="section-title mb-0">
                            <a style="font-size:15px" class="m-0 text-uppercase font-weight-bold text-black"  :href="item.url" target="_blank">{{item.title}}</a>
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
        uniqueArticles: [],
        image:'https://images.theconversation.com/files/430261/original/file-20211104-25-1t7f05u.png?ixlib=rb-1.1.0&rect=35%2C17%2C2309%2C1288&q=45&auto=format&w=926&fit=clip',
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
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${pageSize}`
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
      const uniqueArticlesSet = new Set();

      this.uniqueArticles = articles.filter((article) => {
        const identifier = `${article.title}${article.content}${article.urlToImage}`;
        if (!uniqueArticlesSet.has(identifier)) {
          uniqueArticlesSet.add(identifier);
          return true;
        }
        return false;
      });
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