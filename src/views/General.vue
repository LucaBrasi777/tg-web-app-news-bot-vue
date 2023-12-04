<template lang="">
    <br/>
    <boots1/>
   <div class="container-fluid">
          <div class="container">
              <div class="row">
                  <div class="col-lg-8">
                      <div class="row">
                     <boots2/>
                      <boots3/>
                       <!-- <boots4/> -->
                         <!-- <boots5/>
                         <boots6/> -->
                         
                     </div>
                  </div>
                 
                  <div class="col-lg-4">
                      <boots7/>
                      <boots8/>
                   </div>
              </div>
          </div>
      </div>
      <boots11/>
       <div class="container">
                       <boots9/>
                         
                      </div>
                    <boots10/> 
          
      <boots15/>
      <div class="container">
      <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/9Auq9mYxFEE?si=am96uBuxcUSCyTCQ" allowfullscreen></iframe>
      </div>
  
  </div>
      <boots17/>
      <boots12/>
      <boots18/>
      <boots16/>
      <a href="#" class="btn btn-primary btn-square back-to-top"><i class="fa fa-arrow-up"></i></a>
  
  
    
      </template>
      <script>
       import boots1 from '../components/BootstrapMainPage/v-boots-1.vue'
       import boots2 from '../components/BootstrapMainPage/v-boots-2.vue'
       import boots3 from '../components/BootstrapMainPage/v-boots-3.vue'
      import boots4 from '../components/BootstrapMainPage/v-boots-4.vue'
      import boots5 from '../components/BootstrapMainPage/v-boots-5.vue'
      import boots6 from '../components/BootstrapMainPage/v-boots-6.vue'
      import boots7 from '../components/BootstrapMainPage/v-boots-7.vue'
      import boots8 from '../components/BootstrapMainPage/v-boots-8.vue'
      import boots10 from '../components/BootstrapMainPage/v-boots-10.vue'
      import boots11 from '../components/BootstrapMainPage/v-boots-11.vue'
      import boots12 from '../components/BootstrapMainPage/v-boots-12.vue'
      import boots16 from '../components/BootstrapMainPage/v-boots-16.vue'
      import boots9 from '../components/BootstrapMainPage/v-boots-9.vue'
      import boots14 from '../components/BootstrapMainPage/v-boots-14.vue'
     import boots15 from '../components/BootstrapMainPage/v-boots-15.vue'
     import boots17 from '../components/BootstrapMainPage/v-boots-17.vue'
     import boots18 from '../components/BootstrapMainPage/v-boots-18.vue'
      // import vNav6 from '../pages/nav-6.vue'
      // import vNav5 from '../pages/nav-5.vue'
      // import vNav4 from '../pages/nav-4.vue'
      // import vNav3 from '../pages/nav-3.vue'
      // import vNavNav from '../pages/nav-nav.vue'
      //  import searchGrid from '@/views/Select-3-grid.vue'
      // import search2 from '@/views/Select-3.vue'
      export default {
        components:{
      boots1,boots2,boots3,boots4,boots5,boots6,
      boots8,
      boots7,
      boots10,
      boots11,
      boots9,
      boots14,
      boots15,
      boots12,
      boots16,
      boots17,
      boots18
        },
        data() {
          return {
            articles: [],       
            currentPage: 1,    
            totalPages: 1,     
            rows: 12,          
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
            // Fetch articles from the News API
            const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
            const pageSize = 100;
            
            try {
              const response = await fetch(
                `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=${apiKey}&pageSize=${pageSize}`
              );
              const data = await response.json();
              return data.articles;
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
      };
      </script>
      <style lang="scss" scoped>
      .page-numbers{
        margin-top: 20px;
      }
      a{
        text-decoration: none;
        color: black;
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
                box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
              }
      </style>