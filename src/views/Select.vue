<template lang="">
    <br/><br/>
    <!-- <div>
        <div class="news" v-for="item1 in news" :key="item1">
      <img class="img" :src="item1.urlToImage"><br />
      <p class="p-4">
        <a class="link" :href="item1.url" target="_blank ">{{ item1.title }}</a>
      </p>

    </div>
    </div> -->
    <input type="search" v-model="searchT" placeholder="search">
    <!-- <button @click="searchSelect">search</button> -->
<!-- {{searchT}} -->
<p>{{searchSelect}}</p>
    <!-- <ul>
        <li v-for="item in news"
        :key="item">
         <p>{{item.title}}</p> 
        </li>
    </ul> -->
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            news:[],
            searchT:''
        }
    },
    mounted(){
    axios
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
    .then(response=>{
         this.news = response.data.articles
    })
    .catch(error=>{
      console.log(error)
    })

  },
  computed:{
    searchSelect(){
    
        return this.news.filter(elem=>{
            return elem.title.toLowerCase().includes(this.searchT)
            
        })
    }

  }
   
    
}
</script>
<style lang="scss" scoped>
input{
    border:1px solid black;
    margin:50px;
}
   p{
    margin: 30px;
   } 
</style>