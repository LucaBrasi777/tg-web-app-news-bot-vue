<template lang="">
    <section class="col-3-grid">
      <div class="col-3-grid__block">
      <div class="col-3-grid__block-grid"
     
      >
        <div class="col-grid-3__block-grid-content"
        v-for="item in info4"
      :key="item">
          <img class="col-grid-3__block-grid-content-image" :src='item.urlToImage' :alt=' alt'>
          <p class="col-grid-3__block-grid-content-paragraph link">
            <a class="col-grid-3__block-grid-content-paragraph-link link" :href="item.url" target="_blank "> {{ item.title }} </a>
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
      info4: null
    }
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=3b78f002dbc4466fb5314c295e5f268b&pageSize=12')
      // .get('https://newsapi.org/v2/top-headlines?sources=cbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=9')
      .then(response => {
        this.info4 = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })

  }
}

</script>
<style  lang="scss" scoped>
.link {
  font-size: 100%;
}

.col-3-grid {
  margin-top: 50px;
}

.col-3-grid__block-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 30px;
}

.col-grid-3__block-grid-content-image {
  width: 390px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
  /* margin-right: 20px;
 margin-left: 20px; */

}

.col-grid-3__block-grid-content-paragraph {
  margin-right: 20px;
  /* margin-left: 20px;
 font-size: 16px; */
  /* padding-left: 10px;
  padding-right: 10px; */
}

.col-grid-3__block-grid-content-paragraph-link {
  text-decoration: none;
  color: black;
  width: 300px;
}

.col-grid-3__block-grid-content-paragraph-link:hover {
  text-decoration: underline;
}

.col-3-grid__block-grid {
  @media screen and(max-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  // @media screen and(max-width: 600px)
  // {display: grid;
  // grid-template-columns:repeat(1,1fr);
  // }
}

.col-grid-3__block-grid-content-image {
  @media screen and (max-width:1000px) {
    width: 480px;
  }

  // @media screen and (max-width:600px)
  // {
  //   width: 280px;
  // }
}

.link {
  @media screen and (max-width: 800px) {
    font-size: 120%;

  }

  @media screen and (max-width: 600px) {
    font-size: 130%;
  }

  @media screen and (max-width: 500px) {
    font-size: 140%;
  }

  @media screen and (max-width: 400px) {
    font-size: 150%;

  }
}</style> 
  
  
  
  