<template lang="">
  

  <div class="col-lg-6"
  v-for="(item, index) in articles.slice(19)" :key="index"
  
  >
                            <div class="d-flex align-items-center bg-white mb-3" style="height: 110px;">
                                <!-- <img class="img-fluid" :src="item.urlToImage" alt=""> -->
                                <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div class="mb-2">
                                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2 text-white" href="">Business</a>
                                        <a class="text-body" href=""><small> {{ formatDateTime(item.publishedAt) }}</small></a>
                                    </div>
                                    <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" :href="item.url" target="_blank">{{item.title}}</a>
                                </div>
                            </div>
                          
                            <!-- <div class="d-flex align-items-center bg-white mb-3" style="height: 110px;">
                                <img class="img-fluid" src="/src/img/news-110x110-4.jpg" alt="">
                                <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                    <div class="mb-2">
                                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                    </div>
                                    <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                </div>
                            </div> -->
                        
                        </div>
    
    
    </template>
    <script>
    
   export default {
     components:{
    
     },
     data() {
       return {
         articles: [],       // Array to store articles
         currentPage: 1,    // Current page number
         totalPages: 1,     // Total number of pages
         rows: 4,          // Number of articles per page
       };
     },
     computed: {
       paginatedArticles() {
         // Calculate the range of articles to display on the current page
         const start = (this.currentPage - 1) * this.rows;
         const end = start + this.rows;
         return this.articles.slice(start, end);
       },
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
         // Fetch articles from the News API
         //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
        // const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
         const pageSize = 25;
         
         try {
           const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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
   };
   </script>
   <style lang="scss" scoped>
   a{
    text-decoration: none;
    color: rgb(250, 249, 249);
   }
   img{
       margin: 10px;
   }
       .next-bt,.prev-bt{
             margin: 13px;
             background-color:white;
             color: rgb(248, 2, 2);
             box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
             border-radius: 2px;
             padding: 7px;
             font-weight: bold;
             
           }
           .next-bt:hover,.prev-bt:hover{
             background-image: linear-gradient(to right,#040d1d, #053684);
             color: white;
             
             
         
           } 
           .rounded{
            filter: brightness(50%);
           }
           .row{
            background-color: #040d1d;
            color: white;
           }
   </style>