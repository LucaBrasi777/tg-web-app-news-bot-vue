<!-- <template>
  
    <div >
      <div id="top-of-page"></div>
      <br/>
      <v-row>
        <v-col cols="12" lg="12" xl="8">
          <div>
            <div>
              <div>
                <h3 class="fw-bold">COSMOS<img style="width:100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"/></h3>
                <p class="fw-bold">Photos of space and space objects with articles from archive NASA</p>
  
               
              </div>
  
              <v-divider class="my-4"></v-divider>
  
              <v-row>
                <v-col cols="12" md="6" lg="4" v-for="item in paginatedArticles" :key="item">
                    <div class="d-flex align-center">
                            <v-avatar class="" color="white">
                  <v-icon large>mdi-calendar-range</v-icon>
                </v-avatar>
  
                            <div class="pl-2">{{ formatDateTime(item.date) }}</div>
                          </div>
                  <v-hover
                    v-slot:default="{ hover }"
                    open-delay="50"
                    close-delay="50"
                  >
                    <div>
                      <v-card
                        flat
                        :color="hover ? 'white' : 'transparent'"
                        :elevation="hover ? 12 : 0"
                        hover
                        
                      >
                      <a  :href="item.url" target="_blank">
                        <v-img
                          v-if="item.hdurl"
                          :src="item.hdurl"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          class="elevation-2"
                          style="border-radius: 16px"
                         
                        >
                         
                        </v-img>
                      
                        <v-img
                          v-else
                          src="https://cdn0.sbnation.com/assets/3717901/shutterstock_152383346.jpg"
                          :aspect-ratio="16 / 9"
                          gradient="to top, rgba(25,32,72,.4), rgba(25,32,72,.0)"
                          height="200px"
                          class="elevation-2"
                          style="border-radius: 16px"
                         
                        >
                         
                        </v-img>
                      </a>
                        <v-card-text class="text">
                          <div class="text-h5 font-weight-bold info--text">
                            <a style="font-size:20px" :href="item.url" target="_blank"> {{item.title}}</a><br/>
                            <a class="a" style="font-size:16px" :href="item.url" target="_blank"> {{item.explanation}}</a>
                          </div>
  
                          <div class="text-body-1 py-4">
                           
                          </div>
  
                          
                        </v-card-text>
                      </v-card>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
  
        <v-col>
         
        </v-col>
      </v-row>
     
<div class="pagination">
               <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
               <span class="page-numbers">{{ currentPage }} / {{ totalPages }}</span>
               <span class="next-bt" @click="nextPage" :disabled="currentPage === totalPages">Next</span>
             </div>

    </div>
  </template>
  
  <script>
  export default {
    name: "Category",
    components: {
      siderbar: () => import("@/components/details/sidebar"),
    },
    data() {
        return {
          articles: [],       
          currentPage: 1,  
          
          totalPages: 1,     
          rows: 12, 
          img:'https://www.shaikhandcoaccountants.com/wp-content/uploads/2021/11/business-news-2-shaikh.jpg'         
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
      return new Date(dateTime).toLocaleString(undefined, options); 
    },
        async getData() {
         
          
          const pageSize = 100;
          
          try {
            const response = await fetch(
                //0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4
                'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=100'

             // ` https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
             // `https://newsapi.org/v2/top-headlines?category=entertainment&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
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
             this.scrollToTop()
          }
        },
        prevPage() {
        
          if (this.currentPage > 1) {
            this.currentPage--;
             this.scrollToTop()
          }
        },
         scrollToTop() {
     
     const el = document.getElementById('top-of-page');
     if (el) {
       el.scrollIntoView({ behavior: 'smooth' });
     }
   },
      },
     
      mounted() {
       
        this.fetchNews();
      },
  };
  </script>
  <style scoped>
.text{
    overflow-x:hidden;
              overflow-y:auto;
              height: 310px;
}
.a{
  text-decoration: none !important;
  color:black !important;
}
.prev-bt,
 .next-bt {
 margin: 8px;
 
 color: rgb(248, 2, 2);
 
 padding: 7px;
 font-weight: bold;
 }
 .pagination {
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 20px;
 cursor: pointer;
 font-size: 10px;
 }
</style>
   
   -->


   <template lang="">
  
    <div class="container-fluid" style="margin-top:10px">
        <div class="row">
           

      
       
       
       
       
       
            <div class="col-lg-7 px-0"
            v-for="item in articles2"
                    :key="item"
            >

              <img class="img-fluid w-100 h-100" v-if="item.hdurl"  :src="item.hdurl">
              <img class="img-fluid w-100 h-100" v-else src="https://w7.pngwing.com/pngs/608/986/png-transparent-video-clip-computer-icons-video-on-demand-atm-s-television-logo-advertising.png">
           
              <div class="overlay">
                                <div class="mb-2">
                                   
                                   
                                </div>
                               
                               
                               
                                <!-- <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold"  :href="item.url" target="_blank">{{item.title}}</a> -->
                          
                          
                                <div class="text2">
                                
                                <p><a  :href="item.url" target="_blank" class="h6 m-0 text-white text-uppercase font-weight-semi-bold" >{{item.title}}</a></p>
                                <p class="a text-white" style="font-size:16px" :href="item.url" target="_blank"> {{item.explanation}}</p>
                              
                                </div>
                          
                          
                            </div>
           
            </div>
  





            <div class="col-lg-5 px-0">
                <div class="row mx-0">
                    
                    <div class="col-md-6 px-0"
                    v-for="item in articles" :key="item">
                    
                    
                        <div class="position-relative overflow-hidden" style="height: 250px;">
                            <img class="img-fluid w-100 h-100" v-if="item.hdurl" :src="item.hdurl" style="object-fit: cover;">
                           <img class="img-fluid w-100 h-100" v-else src="https://w7.pngwing.com/pngs/608/986/png-transparent-video-clip-computer-icons-video-on-demand-atm-s-television-logo-advertising.png" style="object-fit: cover;"/>
                            <div class="overlay">
                                <div class="mb-2">
                                    
                                </div>
                                
                                <div class="text">
                                
                                <a  :href="item.url" target="_blank" class="h6 m-0 text-white text-uppercase font-weight-semi-bold" >{{item.title}}</a>
                                <p class="a text-white" style="font-size:16px" :href="item.url" target="_blank"> {{item.explanation}}</p>
                              
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
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
            
           
            const pageSize = 45;
      
            try {
              const response = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=8'
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
  
          async getData2() {
            
           
            const pageSize = 41;
      
            try {
              const response = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=1'
              );
              const data = await response.json();
              return data;
            } catch (error) {
              console.error("Error fetching news:", error);
              return [];
            }
          },
          async fetchNews2() {
            const articles = await this.getData2();
            this.articles2 = articles;
            this.totalPages = Math.ceil(articles.length / this.rows2);
          },
      },
      mounted() {
        
        this.fetchNews();
        this.fetchNews2();
      },
  }
  </script>
  <style lang="scss" scoped>
  .text2{
    overflow-x: hidden;
    overflow-y: auto;
    height: 200px;
  }
  .text{
    overflow-x: hidden;
    overflow-y: auto;
    height: 100px;
  }
    .page-numbers{
      margin-top: 20px;
    }
    a{
      text-decoration: none;
      color: black;
      font-weight: bold;
    }
      a:hover{
        text-decoration: underline;
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
            .card{
                border: none !important;
                box-shadow: none !important;
            }
            .album{
                background-color: transparent !important;
            }
            .badge{
              background-color: dodgerblue;
              color:white
            }
    </style>