<template lang="">
    <br/>
    <div class="wrap">
      
      
     



















      





<div class="grid">
  <img class="stocks-logo" src="../assets/top-2.png">


        <select class="select"  v-model="selected">
    <option value="" disabled>Select Company</option>
    <option v-for="value in stock" 
    :key="value.stock" 
    :value="value.content"
    
    >
    <a :href="value.url">{{ value.title }}</a>
    
  
  </option>


  <!-- <img :src="value.urlToImage"> -->
    <!-- <a>{{ selected }} </a> -->
  </select>
  
</div>


  <div class="info">
   <a >{{ selected }} </a>
  </div>
   
          <div class="stock">
    <div class="stock-item" v-for="value in stock" :key="value.stock">
      <div class="stock-item__info">
        <div class="stock-item__cover">
          <img :src="value.image" :alt="value.companyName">
        </div>
        <h3 class="stock-item__title">
          {{ value.companyName }}
          <span>{{ value.symbol }}</span>
          <span class="stock-item__price">Price:{{ value.price}} $</span>

<span>Mcap:{{value.mktCap}}</span>
          <span>Exchange:{{value.exchange}}</span>
          <span>Industry:{{value.industry}}</span>
          <span>Ceo:{{value.ceo}}</span>
          <span>Country:{{value.country}}</span>
          <span>Phone:{{value.phone}}</span>
          <span>Address:{{value.address}}</span>
          <span>City:{{value.city}}</span>
          <span>State:{{value.state}}</span>
          <span><a :href="value.website" target="_blank"><strong>{{value.website}}</strong></a></span>

        </h3>
      </div>
     </div>
    </div>
</div>
<br/><br/>
</template>
<script lang="">
 import axios from 'axios'

 export default {
   name: 'Stocks',
   data() {
     return {
      href:null,
       stock: [],
       errors: [],
       selected: '',
       info2:[]
     }
   },

  //  mounted(){
  //     axios
  //      .get('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=eb237649c2594555a26f68e392086d40&pageSize=6')
  //     // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
  //      .then(response=>{
  //          this.info2 = response.data.articles
  //     })
  //     .catch(error=>{
  //       console.log(error)
  //     })
  // },


   created() {
     axios
     .get('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=eb237649c2594555a26f68e392086d40&pageSize=100')
    //  .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=100')
    // //  .get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
     .then(responce => {
       this.stock = responce.data.articles
       console.log(responce)
     })
     .catch(e => {
       this.errors.push(e)
     })
   }
 }
</script>
<style lang="scss" scoped>

.text{
  position: absolute;
  color: white;
  font-size: 1em;
  background-color: black;
  margin-top: 250px;

}


img{
  width: 500px;

}

p{
  width: 500px;
  
}

.grid-1{
  display: grid;
  grid-template-columns: 600px 600px;
}











.grid{
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-top: 30px;
}
.stocks-logo{
  width: 400px;
}

.select{
    padding: 8px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    font-weight: bold;
    margin-top: 50px;
    height: 50px;
    margin: 10px;
   outline: none;
    font-size: 20px;
    border-radius: 7px;
    width: 600px;
}
.select:hover{
 background-color: rgb(3, 3, 3);
   color: white;
}
.wrap{
    margin-left: 20px;
    margin-right: 20px;
}

.stock {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
.stock-item {
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
     
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
}
.stock-item__info {
    display: flex;
    align-items: center;
}
.stock-item__cover {
    flex: 0 0 30px;
    margin-right: 15px;
}
.stock-item__cover img {
    width: 100%;
}
.stock-item__title {
    font-size: 15px;
    margin-top: 0;
    margin-bottom: 0;
}
.stock-item__title span {
    display: block;
    font-weight: 400;
    font-size: 14px;
    color: #777;
    margin-top: 3px;
}
.stock-item__price {
    flex: 0 0 80px;
    /* text-align: right; */
}
.info {
    margin-top: 20px;
    font-weight: bold;
    margin-bottom: 40px;
    
}
h2{
    text-align: center;
}
h3{
   margin-top: 40px; 
}





  
</style>