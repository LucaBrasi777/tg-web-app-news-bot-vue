<template lang="">
  <br/><br/>
  <h2 class="sport-news">Business </h2>
  <hr/>
<section class="section-video-2">
    <div class="div-block-video-2"
    v-for="item in info3"
     :key="item">
    
     <img 
    class="main-img-2"
      :src='item.urlToImage' :alt=' alt'
     >

     <p class="paragraph-block-video-2" 
    >
    <strong class="title">   <a class="link" :href="item.url" target="_blank "> {{ item.title }} </a></strong><br />
<span class="description">{{item.description}}</span>
{{item.content}}<br />
{{item.publishedAt}}
     </p>
    
          
         
    </div>
  </section> 
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info3: null
    }
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=3b78f002dbc4466fb5314c295e5f268b&pageSize=1')
      // .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=1')
      .then(response => {
        this.info3 = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })

  },

}

</script>
<style  lang="scss" scoped>
hr{
  background-color: red;
  height: 4px;
}
h2 {
  // text-align: center;
  font-size: 250%;
}

.section-video-2 {
  margin-top: 50px;
}

.div-block-video-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.paragraph-block-video-2 {
  /* margin-left: 20px;
  margin-right: 20px; */
  margin-top: 15px;
  margin: 10px;
}

.main-img-2 {
  width: 600px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);

}

.link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}

.div-block-video-2 {
  @media screen and (max-width:1000px) {
    grid-template-columns: repeat(1, 1fr);

  }
}

.main-img-2 {
  @media screen and (max-width:1000px) {
    width: 960px;
  }
}

.paragraph-block-video-2 {
  @media screen and (max-width: 800px) {
    font-size: 130%;

  }

  @media screen and (max-width: 600px) {
    font-size: 150%;
  }

  @media screen and (max-width: 500px) {
    font-size: 170%;
  }

  @media screen and (max-width: 400px) {
    font-size: 220%;
  }
}</style> 
  
  
  
  

