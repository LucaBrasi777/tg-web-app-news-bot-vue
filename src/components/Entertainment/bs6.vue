<!-- <template lang="">
  <div class="container text-center">
  <h1 class="fw-bold">Articles</h1>
  </div>
    <div class="col-lg-6"
    v-for="(item, index) in articles.slice(1)" :key="index"
    >
    <div class="d-flex align-items-center bg-white mb-3 " style="height: 110px;"
   
    
    >
                                  <img class="img-fluid" src="#" alt="">
                                  <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center  ">
                                      <div class="mb-2">
                                          <a class="h6 badge text-white badge-dark text-uppercase font-weight-semi-bold p-1 mr-2" href="">Medium</a>
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
               articles2: [], 
               currentPage: 1,   
               totalPages: 1,     
               rows: 4,         
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
                 
                
                 const pageSize = 15;
           
                 try {
                   const response = await fetch(
                    ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&Tags=entertainment&Page=1&PageSize=${pageSize}`
                   );
                   const data = await response.json();
                   return data;
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
     
          
            },
           mounted() {
             
             this.fetchNews();
           
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
  .h6 {
max-width: 300px;
  overflow-x:hidden;
  overflow-y:auto;
  // height:300px
}
      </style> -->
      <template lang="">
        <div class="mb-3 ">
          <div class="section-title mb-0">
            <h4 class="m-0 font-weight-bold">Entertainment Articles</h4>
          </div>
          <div class="card-body">
          <div
            class="bg-white border border-top-0 "
            v-for="item in articles"
            :key="item"
          >
          <span class="text-body" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
            <a
              :href="item.url"
              target="_blank"
              class="d-block   rounded"
              style=""
            >
            
              <p class="font-weight-bold p-2">{{ item.title }}</p>
            </a>
          </div>
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
              rows: 100,          
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
             
              //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
              //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
              const pageSize = 100;
              
              try {
                const response = await fetch(
                  `https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&WithImageOnly=true&WithContentOnly=true&Tags=entertainment&Page=1&PageSize=${pageSize}`
                  //`https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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
        .block:hover {
          background-color: aqua;
        }
        span {
          padding: 15px;
          font-size: 20px;
          &.move-left {
            margin-left: -15px; /* Adjust this value based on your design */
          }
        }
        a {
          text-decoration: none;
          color: black;
          display: block; 
        }
        a:hover {
          text-decoration: underline;
          color:rgb(249, 36, 3)
        }
        .rounded {
          border: none !important;
          box-shadow: none !important;
        }
        .album {
          background-color: transparent !important;
        }
        .d-none {
          display: block !important;
          @media screen and (max-width: 991px) {
            display: none !important;
          }
        }
        p {
          @media screen and (max-width: 1200px) {
            display: none;
          }
          @media screen and (max-width: 991px) {
            display: block;
          }
        }
        .card-body {
          overflow-x: hidden;
          overflow-y: auto;
          height: 1200px;
        }
      </style>
      