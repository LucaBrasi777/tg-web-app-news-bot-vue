<template lang="">
  <div>
   
    <div class="card-group" 
    v-for="item in articles"
    :key="item"
    
    >
 
     
 
  <div class="card">
    <img :src="item.urlToImage" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text"><a :href="item.url" target="_blank">{{item.title}}</a></p>
    
    </div>
  </div>
</div>
  </div>
  
     </template> 
      <script>
  
  
  export default {
    components: {
     
      
    },
    data() {
      return {
        articles: [],
        articles2: [],
        articles3: [],
        articles4: [],
        articles5: [],
        articles6: [],
        articles7: [],
        articles8: [],
        rows:2,
        
      };
    },
    computed: {
      
    },
    methods: {
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
          
          
          
          async getData() {
            
           
            const pageSize = 5;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews() {
            const articles = await this.getData();
            this.articles = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
          async getData2() {
            
           
            const pageSize = 8;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews2() {
            const articles = await this.getData2();
            this.articles = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
  
  
      
      
      
      
      
      
          
      
      
      
      
        
  
  
  
  
  
  
  
  
  
  
  
          async getData3() {
            
           
            const pageSize = 10;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews3() {
            const articles = await this.getData3();
            this.articles3 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
      
          async getData4() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
            async fetchNews4() {
            const articles = await this.getData4();
            this.articles4 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
    
          
  
  
  
  
  
  
  
  
  
  
  
      
          async getData5() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
      
          async fetchNews5() {
            const articles = await this.getData5();
            this.articles5 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
          
          async getData6() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Page=1&Language=14&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews6() {
            const articles = await this.getData6();
            this.articles6 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
  
  
  
  
  
  
      
          async getData7() {
            
           
            const pageSize = 1;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews7() {
            const articles = await this.getData7();
            this.articles7 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
  
          async getData8() {
            
           
            const pageSize = 4;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=10&Page=1&PageSize=${pageSize}`
              );
              const data = await response.json();
              return data.items;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews8() {
            const articles = await this.getData8();
            this.articles8 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows);
          },
      
      
  
  
  
        },
         
        mounted() {
          this.fetchNews();
          this.fetchNews2();
          this.fetchNews3();
          this.fetchNews4();
          this.fetchNews5();
          this.fetchNews6();
          this.fetchNews7();
          this.fetchNews8();
         
      
      
        },
  };
  </script>
      <style lang="scss" scoped>
  
  </style>