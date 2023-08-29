<template lang="">
  <div class="wrap">
   
   
    
<v-home/>
<v-home1/>
<v-home2/>
<v-home3/>
<v-home4/>
<v-home5/>
<v-home6/>
<v-home7/>
<v-home8/>

   
  </div>
</template>
<script>
import axios from 'axios';
import vHome from '@/components/home/v-home.vue';
import vHome1 from '@/components/home/v-home1.vue';
import vHome2 from '@/components/home/v-home2.vue';
import vHome3 from '@/components/home/v-home3.vue';
import vHome4 from '@/components/home/v-home4.vue';
import vHome5 from '@/components/home/v-home5.vue';
import vHome6 from '@/components/home/v-home6.vue';
import vHome7 from '@/components/home/v-home7.vue';
import vHome8 from '@/components/home/v-home8.vue';


export default {
  mounted() {
    axios
      .get('https://newsapi.org/v2/top-headlines?category=general&language=en&apiKey=2da18b40bc0a4763aea1b549e9ea7a4a&pageSize=1')
      //  .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb237649c2594555a26f68e392086d40&pageSize=4')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
      .then(response => {
        this.info = response.data.articles
      })
      .catch(error => {
        console.log(error)
      })
  },
  components: {
    vHome,
    vHome1,
    vHome2,
    vHome3,
    vHome4,
    vHome5,
    vHome6,
    // vHome7,
    // vHome8
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
.wrap {
  margin-left: 20px;
  margin-right: 20px;
}


</style>