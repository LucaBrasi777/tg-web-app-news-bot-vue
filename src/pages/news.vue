<template lang="">
    <div class="home">
        <!-- <v-news-anime/> -->
      <v-news/>
      <v-news1/>
      <v-news2/>
      <v-news3/>
    
     
     <v-news6/>
      
      <v-news8/>
     
      <v-news7/>
      <v-news10/>
      <v-news5/>
       <v-news11/> 
       <v-news4/>
       <v-news9/>
      <v-news12a/>
      <v-news12/>
      <!-- <v-news-anime/> -->
    </div>
</template>
<script>
import vNews from '../components/news/v-news.vue';
import vNews2 from '../components/news/v-news2.vue';
import vNews1 from '../components/news/v-news1.vue';
import vNews3 from '../components/news/v-news3.vue';
import vNews4 from '../components/news/v-news4.vue';
import vNews5 from '../components/news/v-news5.vue';
import vNews6 from '../components/news/v-news6.vue';
import vNews7 from '../components/news/v-news7.vue';
import vNews8 from '../components/news/v-news8.vue';
import vNews9 from '../components/news/v-news9.vue';
import vNews10 from '../components/news/v-news10.vue';
import vNews11 from '../components/news/v-news11.vue';
import vNews12 from '../components/news/v-news12.vue';
import vNews12a from '../components/news/v-news12a.vue';
import vNewsAnime from '../components/news/v-news-anime.vue';

export default {
    components: {
        vNews,
        vNews2,
        vNews1,
        vNews3,
        vNews4,
        vNews5,
        vNews6,
        vNews7,
        vNews8,
        vNews9,
        vNews10,
        vNews11,
        vNews12,
        vNews12a,
        vNewsAnime
    }

}
</script>
<style lang="css" scoped>
.home {
    margin-left: 20px;
    margin-right: 20px;
    font-weight: bold;
}
</style>