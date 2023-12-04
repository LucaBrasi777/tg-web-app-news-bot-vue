<template lang="">
   <div class="col-lg-6"
   v-for="item in articles"
   :key="item"
   
   >
                            <div class="position-relative ">
                                <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
                                <img class="img-fluid w-100" v-else :src="image " style="object-fit: cover;">
                               
                                <div class="bg-white  p-4">
                                    <div class="">
                                         <router-link to="/Entertainment" class="badge badge-info text-uppercase font-weight-semi-bold p-2 mr-2 text-white"
                                            href="">Entertainment</router-link>
                                        <a class="text-body" href=""><small> {{ formatDateTime(item.publishedAt) }}</small></a>
                                    </div>
                                    <a class=" d-block  text-secondary text-uppercase font-weight-bold" :href="item.url" target="_blank">{{item.title}}</a>
                                    <!-- <p class="m-0 text-secondary">{{item.content}}</p> -->
                                    <!-- <a href="#" class="text-secondary">author:{{item.author}}</a> -->
                                    <!-- <a href="#" class="">author:{{item.author}}</a> -->
                                  </div>
                                <div class="d-flex justify-content-between bg-white p-4">
                                    <!-- <div class="d-flex align-items-center"> -->
                                        <!-- <img class="rounded-circle mr-2" src="/src/img/user.jpg" width="25" height="25" alt=""> -->


                                       
                                        
                                                   <!-- <a v-else href="#" class="post-author">author:Mr X</a> -->
                                                   
                                    <!-- </div> -->
                                    <!-- <div class="d-flex align-items-center">
                                        <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                        <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                      
                      

</template>
<script>
export default {
    data() {
        return {
          image:'https://i0.wp.com/telugubullet.com/wp-content/uploads/2021/01/The-Best-Part-about-the-Online-Entertainment.jpg',
          articles: [],
          articles2: [], 
          currentPage: 1,    
          totalPages: 1,    
          rows: 8,         
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
            
           
            const pageSize = 8;
      
            try {
              const response = await fetch(
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=6&Language=14&Page=1&PageSize=${pageSize}`
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
                `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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
       
        this.fetchNews();
        this.fetchNews2();
      },
}
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color:rgb(6, 6, 6);
}
a:hover{
    text-decoration: underline;
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

</style>