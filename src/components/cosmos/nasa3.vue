
<template lang="">
    <div class="mb-3">
                        
                       <div class="bg-white border border-top-0  ">
                          
                        <div class="bg-white text-center   ">
                          
                          <router-link to="/Cosmos">  <img class="img-fluid " src="https://un-sci.com/wp-content/uploads/2019/04/00002_Buduschee_vselennoi.jpg" style="object-fit: cover;"></router-link>
                               
                               
                    </div>
                       </div> 
                       <div class="section-title mb-0 bg-dark">
                        <img style="width:150px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/287px-NASA_logo.svg.png"/>
                      <span class="nasa">   </span>
                          <!-- <router-link to="Science/Cosmos"> <h2 class="m-0 text-uppercase font-weight-bold">COSMOS</h2></router-link> -->
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
        // Fetch articles from the News API
        //const apiKey = 'd205e0353aed4e42b97d11c1a88207f0'
        //const apiKey = '1fb27fc9978d48ecadb4bdc77705325e';
        const pageSize = 12;
        
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=6&CategoryId=9&Language=14&Page=1&PageSize=${pageSize}`
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
h2{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color:rgb(253, 46, 5);
font-size: 40px;
text-shadow: 2px 2px 2px white;
}
span{
color: white;
 font-size: 18px;
 font-weight: bold;
 padding: 10px;
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