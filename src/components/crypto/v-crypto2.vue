<template>
  <br /><br />
 <img class="crypto-logo" src="../../assets/cropped-cryptonewslogo (1).png">
  <hr />
  <div class="grid">

    <div class="news" v-for="item1 in news" :key="item1">
      <img class="img" :src="item1.imageurl"><br />
      <p class="p-4">
        <a class="link" :href="item1.url" target="_blank ">{{ item1.title }}</a>
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
      .get('https://min-api.cryptocompare.com/data/v2/news/?feeds=cryptocompare,cointelegraph,coindesk&extraParams=YourSite')
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
span{
  display: flex;
  
}
h2{
  margin-top: 60px;
}
.crypto-logo{
  width: 200px;
  margin-top: 10px;
}
.p-4 {
  width: 270px;
  margin: 10px;
}




.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 30px;

}


.img {
  height: 240px;
  width: 290px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  margin: 5px;
}

.img:hover {
  box-shadow: none;
}


.news {
  /* padding-left: 20px;
    padding-right: 20px; */
  /* margin-top: 130px; */
}

.news-2 {
  /* padding-left: 20px;
    padding-right: 20px; */
  margin-top: 13px;
}


.full-name {
  font-size: 18px;
  font-weight: bold;
}

.full-name,
.name1,
.price1 {
  color: white;
}

.name1 {
  width: 130px;
}

.name1,
.price1 {
  font-size: 14px;

}

.link {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 260px;
  font-weight: bold;
  
}

.link:hover,
.link-2:hover,
.link-3:hover {
  text-decoration: underline;
}


// @media
.grid {
  @media screen and(max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 30px;
  }

  @media screen and(max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 30px;
  }

  @media screen and(max-width: 400px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    margin-top: 30px;
  }
}

.img {
  @media screen and(max-width:900px) {
    width: 280px;
  }

  @media screen and(max-width:600px) {
    width: 280px;
  }

  @media screen and(max-width:400px) {
    width: 360px;
  }
}

.p-4 {
  @media screen and (max-width:600px) {
    width: 250px;
  }

  @media screen and (max-width:400px) {
    width: 360px;
  }
}</style>
   

