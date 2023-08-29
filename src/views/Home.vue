<!-- <template lang="">
    <div class="home">
      <br/> 
      
       <home/> 
    </div>
</template>
<script>
// 2da18b40bc0a4763aea1b549e9ea7a4a API home
import home from '../pages/home.vue'
import news from'../pages/news.vue'
export default {
    components:{
        home,
        news
    }
    
}
</script>
<style lang="">
    
</style> -->
<template lang="">
    
    <div class="news">
        <news/>
    </div>
</template>
<script>
// 3b78f002dbc4466fb5314c295e5f268b API news
import news from '@/pages/news.vue';
export default {
    components:{
        news
    }
    
}
</script>
<style lang="scss" scoped>
.news{
    margin-top: 30px;
}
</style>