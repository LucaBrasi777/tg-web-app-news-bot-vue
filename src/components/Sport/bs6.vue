
      <template lang="">
        <div class="mb-3 ">
          <div class="section-title mb-0">
            <h4 class="m-0 font-weight-bold">Sport Articles</h4>
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
                  `https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&WithImageOnly=true&WithContentOnly=true&Tags=sport&Page=1&PageSize=${pageSize}`
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
      