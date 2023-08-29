<template lang="">
    <div>
        <v-row no-gutters>
        <v-col class="news-midlle"
       
       >
         <v-sheet class="pa-2 ma-2"
         v-for="newsMidlle in infoMidlle"
         :key="newsMidlle"
         >
           <img class="img7" :src="newsMidlle.urlToImage"><br />
           <span class="news-midlle-link"><a class="link" :href="newsMidlle.url" target="_blank ">{{ newsMidlle.title }}</a></span>
         </v-sheet>
       </v-col>
      </v-row> 
    </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    infoMidlle: []
  },
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?sources=nbc-news&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=9')
      .then(response => {
        this.infoMidlle = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style lang="scss" scoped>
.news-midlle {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width:1279px) {
    grid-template-columns: repeat(1, 1fr);
  }

}

.news-midlle-link {
  font-weight: bold;
  font-size: 18px;

  @media screen and (max-width:1000px) {
    font-size: 25px;
  }

  @media screen and (max-width:600px) {
    font-size: 30px;
  }

  @media screen and (max-width:480px) {
    font-size: 35px;
  }

}

.img7 {
  width: 358px;

  @media screen and (max-width: 1279px) {
    width: 950px;
    height: 500px;
  }
}

.link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.link:hover {
  text-decoration: underline;
}</style>