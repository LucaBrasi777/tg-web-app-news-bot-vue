<template lang="">
    <div class="col-lg-12 mb-3">
                          <!-- <a href=""><img class="/src/img-fluid w-100" src="img/ads-728x90.png" alt=""></a> -->
                      </div>
                   
                      <div class="col-lg-12"
                      v-for="(item, index) in articles.slice(55)" :key="index"
                      
                      >
                          <div class="row news-lg mx-0 mb-3">
                              <div class="col-md-6 h-100 px-0">
                                  <img class="img-fluid h-100" v-if = "item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
                                  <img class="img-fluid h-100" v-else src="https://healthnews-stat.com/wp-content/uploads/2023/03/97925489.jpg" style="object-fit: cover;">
                                 
                              </div>
                              <div class="col-md-6 d-flex flex-column bg-white h-100 px-0">
                                  <div class="mt-auto p-4">
                                      <div class="mb-2">
                                          <a class="badge badge-success text-white text-uppercase font-weight-semi-bold p-2 mr-2"
                                              href="">Health</a>
                                          <span class="text-body" href=""><small>  {{ formatDateTime(item.publishedAt) }}</small></span>
                                      </div>
                                      <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold"  :href="item.url" target="_blank">{{item.title}}</a>
                                      <!-- <p class="m-0">{{item.content}}</p> -->
                                  </div>
                                  <div class="d-flex justify-content-between bg-white  mt-auto p-4">
                                      <div class="d-flex align-items-center">
                                          <!-- <img class="rounded-circle mr-2" src="/src/img/user.jpg" width="25" height="25" alt="">
                                          <small>John Doe</small> -->
                                      </div>
                                      <!-- <div class="d-flex align-items-center">
                                          <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                          <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                      </div> -->
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
          
         
          const pageSize = 60;
    
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

        async getData2() {
          
         
          const pageSize = 1;
    
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
        async fetchNews2() {
          const articles = await this.getData2();
          this.articles2 = articles;
          this.totalPages = Math.ceil(articles.length / this.rows2);
        },
    },
    mounted() {
      // Fetch news data when the component is mounted
      this.fetchNews();
      this.fetchNews2();
    },
}
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
      .pagination{
      //   margin-left:100px;
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
filter: brightness(0.5); /* Adjust the brightness value to control the darkness */
z-index: 1;
}

.card .d-flex {
position: relative;
z-index: 2;
}

.card .d-flex h2 {
color: #fff; /* Set the color for the bright h2 title */
}
h2{
position: relative;
z-index: 3;
}
</style>
