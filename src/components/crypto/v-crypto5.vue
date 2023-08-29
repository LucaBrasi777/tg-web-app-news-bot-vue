<template>
  <div class="grid-5">
    <div class="news-5" v-for="item1 in news" :key="item1">
      <img class="img-5" :src="item1.imageurl"><br />
      <p class="p-5">
        <a class="link-5" :href="item1.url" target="_blank ">{{ item1.title }}</a>

      </p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      news: null
    }
  },
  mounted() {
    axios
      // .get( 'https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored')
      .get('https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH,regulation&extraParams=YourSite')
      .then(response => {

        this.news = response.data.Data
      })
      .catch(error => {
        console.log(error)
      })





  }
}

</script>
    
<style lang="scss" scoped>
.p-5 {
  width: 200px;
  margin: 7px;
}

.grid-5 {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: 50px;
  /* padding-left: 20px;
        padding-right: 20px; */
}

.img-5 {
  width: 230px;
  margin: 5px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}

.img-5:hover {
  box-shadow: none;
}

.link-5 {
  text-decoration: none;
  color: black;
  font-size: 17px;
  font-weight: bold;
}

.link-5:hover {
  text-decoration: underline;
}

.grid-5 {
  @media screen and(max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and(max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  // @media screen and(max-width: 350px)
  //     {display: grid;
  //     grid-template-columns:repeat(1,1fr);
  // }
}

.img-5 {
  @media screen and(max-width: 600px) {
    width: 280px;
  }

  @media screen and(max-width: 400px) {
    width: 360px;
  }
}

.p-5 {
  @media screen and (max-width: 600px) {
    width: 280px;
  }

  @media screen and (max-width: 400px) {
    width: 360px;
  }
}</style>
     
  
  