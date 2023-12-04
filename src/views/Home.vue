
    <template lang="">
   <router-view/>
   
     <div class="col-lg-12 mt-12 px-0 " id="home">
               <div class="row mx-0">
                   
                   <div class="col-md-3 px-0"
                   v-for="item in articles" :key="item"
                  
                   
                   >
                       <div  class="position-relative overflow-hidden" style="height: 250px;">
                        <router-link  :to="item.route">   
                 <img  class="img-fluid w-100 h-100"  :src="item.img" style="object-fit: cover;">
            
                        </router-link>
                          
                       </div>
                   </div>
               </div>
           </div>
      
     
     
      <div id="target"></div>

 </template>
 <script>
 export default {
   data() {
       return {
        
       
         articles2: [], 
         currentPage: 1,    
         totalPages: 1,     
         rows: 4,         
       };
     },
     computed: {

      articles(){
        return [
        {
            img:'https://automaticlogslitters.com/wp-content/uploads/2022/09/photodune-9262934-latest-news-blue-3d-realistic-paper-speech-bubble-s.jpg',
            route:'/General'
          },
          {
            img:'https://upload.wikimedia.org/wikipedia/uk/5/58/Business_logo.jpg',
            route:'/Business'
            
          },
          {
            img:'https://deadline.com/wp-content/uploads/2019/08/e-news-logo-featured.jpg?w=681&h=383&crop=1',
            route:'/Entertainment'
          },
          
          {
            img:'https://www.river1467.com.au/wp-content/uploads/sites/29/2022/12/news_features_sports-news-min.jpg',
            route:'/Sport'
          },
          {
            img:'https://image.myupchar.com/5303/original/swasthya-samachar-health-news-in-hindi.png',
            route:'/Health'
          },
          {
            img:'https://www.nimh.nih.gov/sites/default/files/images/landing-pages/science-news-article.jpg',
            route:'/Science'
          },
          {
            img:'https://st2.depositphotos.com/1092019/5248/i/450/depositphotos_52486621-stock-photo-tech-news-on-blue-puzzle.jpg',
            route:'/Tech'
          },
         
          {
            img:'https://assets-global.website-files.com/5ddfe807a73baddd985c1e6f/604fa038d8d5c63d1c304640_BOTS_Crypto_News_Website-Header.jpg',
            route:'/Business/Crypto'
          },
          
         ]},
       paginatedArticles() {
         // Calculate the range of articles to display on the current page
         const start = (this.currentPage - 1) * this.rows;
         const end = start + this.rows;
         return this.articles.slice(start, end);
       },
     },
     methods: {
//       closedHome() {
//  setTimeout(() => {
//     const closeHome = document.getElementById('home');
//     if (closeHome) {
//       closeHome.style.display = "none";
//     }
//   }, 0);
// },
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
         
         scrollToAnchor() {
      // Yakor' dolzhen byt' nazvaniem, k kotoromu vy hotite opustit'sya
      const anchor = document.getElementById("target");
      if (anchor) {
        anchor.scrollIntoView({ behavior: "smooth" });
      }
    },
         
},
mounted(){
  this.scrollToAnchor();
}
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
           .badge{
             background-color: dodgerblue;
             color:white
           }
   </style>