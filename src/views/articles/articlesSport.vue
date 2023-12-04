<template lang="">


  <v-card class="">
  

    
  </v-card>
  <div class="containe">
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/SD3ZIRU03s4?si=JWtiPHBGnQvhvQ-k" title="YouTube video player" allowfullscreen></iframe>
    </div>
  </div>
<div class="container-fluid mt-12">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-8">
                          <div class="row">
                        
                            <div class="col-lg-6 "
      v-for="(item, index) in articles" :key="index"
      >
      <div class="d-flex align-items-center bg-white mb-3 " style="height: 110px;"
     
      
      >
                                    <img class="img-fluid" src="#" alt="">
                                    <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center  ">
                                        <div class="mb-2">
                                            <span class="badge badge-dark text-uppercase text-white font-weight-semi-bold p-1 mr-2" >Medium</span>
                                            
                                        </div>
                                       
                                        <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" :href="item.url" target="_blank" style="max-width: 300px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;font-size:12px">{{item.title}}</a>
                                        <span class="text-body" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
                                      </div>
                                </div>
                              
                              
                              </div>
    
                        <sc/>
                       
                        </div>
                          </div>
                   <div class="col-lg-4">
                          <tech/>
                         
                        </div>
                  </div>
              </div>
          </div>
          
          
         


        
          </template>




  
          
       <script>
       import tech from '../articles2/artTech.vue'
       export default {
        components:{tech},
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
                   
                  
                   const pageSize = 100;
             
                   try {
                     const response = await fetch(
                   //  ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&WithContentOnly=true&Tags=science&Page=1&PageSize=${pageSize}`
                   ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&Tags=technology&Page=1&PageSize=${pageSize}`
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
        </style>