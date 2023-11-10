<template lang="">
  <br/>
  <!-- <div  class="mt-3 embed-responsive embed-responsive-16by9">
  <video controls="false" class="embed-responsive-item" src="https://dsqqu7oxq6o1v.cloudfront.net/preview-1240469-RzHxnmo7My-high.mp4" allowfullscreen></video>
</div> -->


<bs8/>
<bs9/>
<bs14/>
<br/>
<div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                  
                      <bs11/>
                 
                   <bs5/>
                   <bs10/>
                    <bs6/>
                 
                  </div>
                    </div>
             <div class="col-lg-4">
                    
                    <bs7/>
                
                  </div>
            </div>
        </div>
    </div>

    <div class="container">
    
  </div>
    
   
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/6LcCsuq76N0?si=S1imCjeO7anDGrRl" allowfullscreen></iframe>
    </div>
    <bs16/>
    <bs12/>
    <bs15/>
   
    
  
     
    
  
    </template>
    <script>
    
    import bs5 from '../components/Sport/bs5.vue'
    import bs6 from '../components/Sport/bs6.vue'
    import bs7 from '../components/Sport/bs7.vue'
    import bs8 from '../components/Sport/bs8.vue'
    import bs10 from '../components/Sport/bs10.vue'
    import bs11 from '../components/Sport/bs11.vue'
    import bs16 from '../components/Sport/bs16.vue'
    import bs9 from '../components/Sport/bs9.vue'
    import bs14 from '../components//Sport/bs14.vue'
    import bs12 from '../components/Sport/bs12.vue'
    import bs15 from '../components/Sport/bs15.vue'

    export default {
      components:{
    bs5,
    bs6,
    bs8,
    bs7,
    bs10,
    bs11,
    bs9,
    bs14,
    bs12,
    bs16,
   
    bs15,
   
      },
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
      }}
      </script>