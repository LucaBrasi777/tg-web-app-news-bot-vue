<template lang="">
    <br/><br/>
    
    <input type="search" v-model="searchT" placeholder="search"
    
   
    >
   


    <a href="">{{searchSelect}}</a>
   
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