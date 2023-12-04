<template lang="">
     <div class="mb-3">
                         <div class="section-title mb-0">
                            <h5 class="m-0 text-uppercase font-weight-bold">Follow Us</h5>
                        </div>
                        <div class="bg-white border border-top-0 p-3 ">
                            <!-- <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: gold">
                              
                                <span  @click="closedHome" class="font-weight-bold "><router-link  class="text-black bus text-decoration-none" to="/Business">BusinessBusinessBusinessBusi</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: #52AAF4;">
                                
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Crypto">CryptoCryptoCryptoCrypto</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: red;">
                               
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Sport">Sport</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: blue;">
                               
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Science">Science</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: grey;">
                               
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Tech">Technology</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none mb-3 rounded" style="background: green;">
                                
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Health">Health</router-link></span>
                            </a>
                            <a href="" class="d-block w-100 text-white text-decoration-none rounded" style="background: indigo;">
                                
                                <span @click="closedHome" class="font-weight-bold"><router-link class="text-white text-decoration-none" to="/Entertainment">Entertainment</router-link></span>
                            </a> -->
                            <div class="row">
                    <div class="col-4 mb-3"
                    v-for="item in articles"
                    :key="item"
                    >
                       
                    <a :href="item.url">
                      <img class="w-100" v-if="item.urlToImage" :src="item.urlToImage" alt="">
                      <img class="w-100" v-else :src="image" alt="">
                    
                    </a>
                    
                  </div>
                    
                </div>
                        </div> 
                    </div>
                  
</template>
<script>
export default {

data() {
     return {
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS0qiZNhj7gGZ88wx9rCMcl5juiagmuZg6iytAHOouX55W7k3HKa9n7z2PR5eT8jhitXw&usqp=CAU',
      currentYear: new Date().getFullYear(),
       articles: [],       
       currentPage: 1,    
       totalPages: 1,    
       rows: 11,          
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
    closedBusiness() {
console.log("Closing Business");
setTimeout(() => {
  const closeBusiness = document.getElementById('business');
  if (closeBusiness) {
    closeBusiness.style.display = "none";
  }
}, 0);
},
    closedHome(){
  const close = (document.getElementById('home').style.display="none")
  },
     async getData() {
      
      // const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
       //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
       const pageSize = 12;
       
       try {
         const response = await fetch(
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=1&PageSize=${pageSize}`
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




};
</script>
<style lang="scss" scoped>
.bus{
  text-shadow: 2px 2px 2px rgb(249, 2, 2);
}
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
    // .font-weight-bold,.border{
    //   box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    // }
    .w-100{
      box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    }
    
</style>