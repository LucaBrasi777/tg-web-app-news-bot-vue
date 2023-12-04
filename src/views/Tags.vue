
    <template lang="">
 <v-toolbar color="red" class="tool">
        <template v-slot:extension>
          <v-tabs
            v-model="tab"
            align-tabs="title"
          >
            <v-tab
              v-for="item in items"
              :key="item"
              :value="item"
            >
              <router-link style="text-decoration:none" class="text-white t" :to="item.route">{{ item.name }}</router-link>
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>
      <router-view></router-view>
       
      <div class="containe">
      <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/sNFzB1pbsKc?si=BxEuWEsCln57bja1" allowfullscreen></iframe>
      </div>
    </div>
      
   </template>
  <script>
      //  import tags from './Tags2.vue'
       export default {
        components:{},
           data() {
               return {
                
                tab: null,
          items: [
            {
              name:'business',
              route:'/Tags/bus',
            },
            {
              name:'technology', 
              route:'/Tags/t',
            },
            {
              name:'science', 
              route:'/Tags/sc',
            },
            {
              name:'sport', 
              route:'/Tags/sp',
            },
            {
              name: 'health',
              route:'/Tags/hl',
            },
            {
              name: 'entertainment',
              route:'/Tags/en',
            },
             
             
             
            
            
          ],
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
                     ` https://api-epicnews404.azurewebsites.net/Articles?SiteId=1&WithContentOnly=true&Tags=science&Page=1&PageSize=${pageSize}`

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
        .t{
          @media screen and (max-width:340px){
            font-size: 12px;
          }
        }
        // .art:hover{
        //   text-decoration: none;
        // }
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
      // margin-top: 20px;
    }
    .h6{
      max-width:300px ;
    }
    .img-fluid{
      max-width:100%;
       height:auto
    }
    .tool{
      
      
    }
        </style>