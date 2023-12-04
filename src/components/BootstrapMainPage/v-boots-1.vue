<template lang="">
  
    <div class="container-fluid" style="margin-top:10px">
       
      
      
      <div class="row">
            <div class="col-lg-7 px-0"
            v-for="item in articles2"
                    :key="item"
            >

              <img class="img-fluid w-100 h-100" v-if="item.urlToImage" :src="item.urlToImage">
              <img class="img-fluid w-100 h-100" v-else :src="image2">
           
              <div class="overlay">
                                <div class="mb-2">
                                    <router-link to="/Business" class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2 text-white"
                                        >Business</router-link>
                                    <small></small>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" :href="item.url" target="_blank">{{item.title}}</a>
                            </div>
           
            </div>

       <div class="col-lg-5 px-0">
                <div class="row mx-0">
                    
                    <div class="col-md-6 px-0"
                    v-for="item in articles"
                    :key="item"
                    
                    >
                        <div class="position-relative overflow-hidden" style="height: 250px;">
                            <img class="img-fluid w-100 h-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
                            <img class="img-fluid w-100 h-100" v-else :src=" image" style="object-fit: cover;">
                           
                           
                            <div class="overlay">
                                <div class="mb-2">
                                    <router-link to="/Health" class="badge badge-success text-uppercase font-weight-semi-bold p-2 mr-2 text-white"
                                        >Health</router-link>
                                  <small></small>
                                </div>
                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" :href="item.url" target="_blank">{{item.title}}</a>
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
          image:'https://www.healthcareitnews.com/sites/hitn/files/Doctor%20at%20computer%2C%20hologram%20illustration_2.jpg',
          image2:'https://static.independent.co.uk/2023/09/15/13/Sapiens_Header%20image_iStock-1419269294.jpg?quality=75&width=640&crop=3%3A2%2Csmart&auto=webp',
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
            
           
            const pageSize = 4;
      
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
    </style>