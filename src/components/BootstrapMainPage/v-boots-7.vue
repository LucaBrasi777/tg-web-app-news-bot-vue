<template lang="">
     <div class="mb-3">
                         <div class="section-title mb-0">
                            <h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                        </div>
                        <div class="bg-white border border-top-0 p-3 ">
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: gold">
                                <!-- <i class="fab fa-facebook-f text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span  @click="closedHome" class="font-weight-bold"><router-link  class="text-black text-decoration-none" to="/Business">Business</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #52AAF4;">
                                <!-- <i class="fab fa-twitter text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Crypto">Crypto</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: red;">
                                <!-- <i class="fab fa-twitter text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Sport">Sport</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: blue;">
                                <!-- <i class="fab fa-linkedin-in text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Science">Science</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: grey;">
                                <!-- <i class="fab fa-instagram text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Tech">Technology</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: green;">
                                <!-- <i class="fab fa-youtube text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Health">Health</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none rounded" style="background: indigo;">
                                <!-- <i class="fab fa-vimeo-v text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i> -->
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Entertainment">Entertainment</router-link></span>
                            </a>
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
        
         //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
         //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
         const pageSize = 12;
         
         try {
           const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${pageSize}`
           );
           const data = await response.json();
           return data.items;
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
span{
  padding: 15px;
  font-size: 20px;
}
a{
    text-decoration: none;
    color: black;
}
a:hover{
  text-decoration: underline;
}
.rounded{
                border: none !important;
                box-shadow: none !important;
            }
            .album{
                background-color: transparent !important;
            }
            .d-none {
    display: block !important;
    @media screen and(max-width: 991px){
        display: none !important;
        }

}
    p{
        @media screen and(max-width: 1200px){
            display: none;
        }
        @media screen and(max-width: 991px){
            display: block;
        }
    }
</style>