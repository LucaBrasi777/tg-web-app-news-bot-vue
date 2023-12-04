


   <template lang="">
  
  <div id="top-of-page"></div>
       

    <div class="col-lg-12 px-0">
        <div class="row mx-0">

            <div class="col-md-6 px-0"
            v-for="item  in paginatedArticles" :key="item">
                <div class="position-relative overflow-hidden" style="height: 250px;">
                   
                  <img class="img-fluid w-100 h-100" v-if="item.hdurl" :src="item.hdurl" style="object-fit: cover;">
      <img class="img-fluid w-100 h-100" v-else :src="image" style="object-fit: cover;">
   
                  
                 
                    <div class="overlay">
                        <div class="mb-2">
                            
                        </div>
                        <div class="text">
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold"  :href="item.url" target="_blank">{{item.title}}</a>
                        <p class="a text-white" style="font-size:16px" > {{item.explanation}}</p>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pagination">
               <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Previous</span>
               <span class="page-numbers text-white">{{ currentPage }} / {{ totalPages }}</span>
               <span class="next-bt " @click="nextPage" :disabled="currentPage === totalPages">Next</span>
             </div>

<!--  -->

<!--        
</div> -->

</template>
<script>
export default {
data() {
return {
  image:'https://w7.pngwing.com/pngs/608/986/png-transparent-video-clip-computer-icons-video-on-demand-atm-s-television-logo-advertising.png',
  articles: [],
  articles2: [], 
  currentPage: 1,  
  totalPages: 1,     
  rows: 10,         
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

}}
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
      // background-color:white;
      color: white;
      // box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      // border-radius: 2px;
      padding: 7px;
      font-weight: bold;
      cursor: pointer;
      
    }
    .next-bt:hover{
     color:green
      
    } 
    .prev-bt:hover{
      color: red;
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
    .text{
    overflow-x: hidden;
    overflow-y: auto;
    height: 100px;
  }
  .h6{cursor: pointer;}
</style>