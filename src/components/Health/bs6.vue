<template lang="">
  
    <div class="col-lg-6 mt-5"
    v-for="(item, index) in articles.slice(65)" :key="index"
    >
    <div class="d-flex align-items-center bg-white mb-3 " style="height: 110px;"
   
    
    >
                                  <img class="img-fluid" src="#" alt="">
                                  <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center  ">
                                      <div class="mb-2">
                                          <a class="badge badge-success text-uppercase text-white font-weight-semi-bold p-1 mr-2" href="">Health</a>
                                          <span class="text-body" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
                                      </div>
                                      <a class="h6 m-0 text-secondary text-uppercase font-weight-bold"  :href="item.url" target="_blank">{{item.title}}</a>
                                  </div>
                              </div>
                            
                            
                            </div>
  
      </template>
     <script>
     export default {
         data() {
             return {
               articles: [],
               articles2: [], // Array to store articles
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
                 
                
                 const pageSize = 71;
           
                 try {
                   const response = await fetch(
                     `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=8&Language=14&Page=1&PageSize=${pageSize}`
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
     
          //      async getData2() {
                 
                
          //        const pageSize = 1;
           
          //        try {
          //          const response = await fetch(
          //            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
          //          );
          //          const data = await response.json();
          //          return data.items;
          //        } catch (error) {
          //          console.error("Error fetching news:", error);
          //          return [];
          //        }
          //      },
          //      async fetchNews2() {
          //        const articles = await this.getData2();
          //        this.articles2 = articles;
          //        this.totalPages = Math.ceil(articles.length / this.rows2);
          //      },
            },
           mounted() {
             // Fetch news data when the component is mounted
             this.fetchNews();
            //  this.fetchNews2();
           },
     }
     </script>
      <style lang="scss" scoped>
      .card{
        border: none !important;
                  box-shadow: none !important;
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
              a{
      text-decoration: none;
      color: black;
  }
  a:hover{
      text-decoration: underline;
  }
  span{
    margin-top: 20px;
  }
      </style>