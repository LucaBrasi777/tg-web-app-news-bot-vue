<template lang="">
  <h2>Technology</h2>
  <section class="col-4-grid">
      <div class="col-4-grid__block">
      <div class="col-4-grid__block-grid"
     
      >
        <div class="col-grid-4__block-grid-content"
        v-for="item in info2"
      :key="item">
          <img class="col-grid-4__block-grid-content-image img" :src='item.urlToImage' :alt=' alt'>
          <p class="col-grid-4__block-grid-content-paragraph">
            <a class="col-grid-4__block-grid-content-paragraph-link" :href="item.url" target="_blank "> {{ item.title }} </a>
          </p>
        </div>
       
      </div>
    </div>
  
</section> 
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info2: null
    }
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=8')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
      .then(response => {
        this.info2 = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })
  }
}

</script>
<style  lang="scss" scoped>
.col-4-grid {
  margin-top: 50px;
}

.col-4-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;
}

.img {
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 10px;
  width: 295px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-4__block-grid-content-paragraph {
  /* margin-right: 20px;
 margin-left: 20px; */
  font-size: 16px;
  /* padding-left: 10px;
  padding-right: 10px; */
}

.col-grid-4__block-grid-content-paragraph-link {
  text-decoration: none;
  color: black;
  width: 200px;
  font-weight: bold;
}

.col-grid-4__block-grid-content-paragraph-link:hover {
  text-decoration: underline;
}
.col-4-grid__block-grid {
  @media screen and(max-width:900px){
  
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;}

  @media screen and(max-width:600px){
  
  grid-template-columns: repeat(2, 1fr);
  margin-top: 30px;}
  @media screen and(max-width:400px){
  
  grid-template-columns: repeat(1, 1fr);
  margin-top: 30px;}
}
.img {
  @media screen and(max-height:400px){
    width: 360px;
    
  }
}</style> 



