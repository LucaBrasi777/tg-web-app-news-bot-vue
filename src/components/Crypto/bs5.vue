<template lang="">
    <div class="col-lg-12 mb-3">
                          <!-- <a href=""><img class="/src/img-fluid w-100" src="#" alt=""></a> -->
                      </div>
                   
                      <div class="col-lg-12"
                      v-for="(item, index) in articles.slice(1)" :key="index"
                      
                      >
                          <div class="row news-lg mx-0 mb-3">
                              <div class="col-md-6 h-100 px-0">
                                  <img class="img-fluid h-100" v-if = "item.imageurl" :src="item.imageurl" style="object-fit: cover;">
                                  <img class="img-fluid h-100" v-else src=" #" style="object-fit: cover;">
                                 
                              </div>
                              
                              <div class="col-md-6 d-flex flex-column bg-white h-100 px-0 card-body">
                                <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"  :href="item.url" target="_blank">{{item.title}}</a>
                                <img :src="item.source_info.img" style="width:20px"><span class="text-secondary">{{item.source_info.name}}</span>
                               <span class="fw-bold" >{{item.body}}</span>
                                <div class="mt-auto p-4">
                                      
                                      
                                      <!-- <p class="m-0">{{item.content}}</p> -->
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
        rows:1,
        
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
               
       
             
               const pageSize = 52;
               
               try {
                 const response = await fetch(
                  // 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored'
                  'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite'

                 );
                 const data = await response.json();
                 return data.Data;
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
          
          
          
          
  
  
  
  
  
  
  
        },
        mounted() {
          this.fetchNews();
         
          
          
         
      
      
        },
}
</script>

<style lang="scss" scoped>
.card-body{
    overflow-x: hidden;
    overflow-y: auto;
    // height: 40px;
  }
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
      







      a{
    text-decoration: none;
    color: rgb(246, 243, 243);
    font-weight: bold;
  }
    a:hover{
      text-decoration: underline;
    } 


.card {
position: relative;
filter: brightness(50%);
}

.card-background {
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
filter: brightness(0.5); 
z-index: 1;
}

.card .d-flex {
position: relative;
z-index: 2;
}

.card .d-flex h2 {
color: #fff; 
}
h2{
position: relative;
z-index: 3;
}
</style>
