<template>
  <div class="grid-2">
    <div class="news-2" v-for="item1 in news2" :key="item1">
      <!-- <img class="img-2" :src="item1.imageurl"> -->
      <ul>
        <li><a class="link-2" :href="item1.url" target="_blank ">{{ item1.title }}</a><span
            class="source">/{{ item1.source }}</span></li>

      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      news2: null
    }
  },
  mounted() {
    axios
      .get('https://min-api.cryptocompare.com/data/v2/news/?categories=Technology,Blockchain&excludeCategories=Regulation,Mining')
      .then(response => {

        this.news2 = response.data.Data
      })
      .catch(error => {
        console.log(error)
      })





  }
}

</script>
    
<style lang="scss" scoped>
.grid-2 {
  margin-top: 50px;
  /* padding-left: 20px;
        padding-right: 20px; */
}

.img-2 {
  width: 170px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  transition: 1s;
}

.img-2:hover {
  width: 170px;
  transition: 1s;
}

.news-2 {
  /* padding-left: 20px;
    padding-right: 20px; */
  margin-top: 13px;
}

.link-2 {
  text-decoration: none;
  color: black;
  font-size: 17px;
  width: 900px;
  font-weight: bold;
  margin-left: 5px;

}

.link:hover,
.link-2:hover,
.link-3:hover {
  text-decoration: underline;
}

.source {
  color: red;
}
</style>
     
  
  