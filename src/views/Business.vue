<template lang="">
    
    <div class="wrap">
      <br/>




     


        <img class="logo" src="../assets/business-logo.png">
    <section class="col-4-grid">
        <div class="col-4-grid__block">
        <div class="col-4-grid__block-grid"
       
        >
          <div class="col-grid-4__block-grid-content"
          v-for="item in info2"
        :key="item">
            <img class="col-grid-4__block-grid-content-image img" 
            :src='item.urlToImage' 
            :alt='alt'>
            <p class="col-grid-4__block-grid-content-paragraph">
              <a class="col-grid-4__block-grid-content-paragraph-link"
               :href="item.url"
                target="_blank "> {{ item.title }} </a>
            </p>
          </div>
        
        </div>
      </div>
    
  </section>  
<!-- <p v-for="item in info2"
:key="item">
{{item.title}}

</p> -->

  



<br/>

       
    </div>
         <br/><br/>
</template>
<script lang="">
// eb237649c2594555a26f68e392086d40 API bussiness
 import axios from 'axios'

 export default {
   name: 'Stocks',
   data() {
     return {
      info2:null
      //  stock: [],
      //  errors: [],
      //  selected: ''
     }
   },

   mounted(){
      axios
      //.get('https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?TenantId=1&Language=52&Country=41&CategoryId=9&Page=1&PageSize=10')
         .get('https://newsapi.org/v2/top-headlines?category=business&language=en&apiKey=eb237649c2594555a26f68e392086d40&pageSize=100')
      // .get(' https://newsapi.org/v2/everything?q=Apple&from=2023-08-19&sortBy=popularity&apiKey=eb237649c2594555a26f68e392086d40')
       .then(response=>{
           this.info2 = response.data.articles
      })
      .catch(error=>{
        console.log(error)
      })
  },


  //  created() {
  //    axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
  //    .then(responce => {
  //      this.stock = responce.data
  //      console.log(responce)
  //    })
  //    .catch(e => {
  //      this.errors.push(e)
  //    })
  //  }
 }
</script>
<style lang="scss" scoped>
.logo{
  width: 150px;
  margin-top: 20px;
}

    .text{
      box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
      padding: 10px;
    }
    .top-link:hover{
        background-color: rgb(1, 1, 1);
        color: white;
        

    }










.select{
    padding: 5px;
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
    font-weight: bold;
    margin-top: 50px;
    height: 50px;
    margin: 10px;
}
.wrap{
    padding-left: 20px;
    padding-right: 20px;
}





.col-4-grid{
     margin-top: 0px;
     }
   .col-4-grid__block-grid{
    display: grid;
    grid-template-columns:repeat(4,1fr);
    margin-top: 0px;
    }
  .img{
    box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
       margin: 5px;
    width: 290px;
    height: 160px;
   /* margin-right: 20px;
   margin-left: 20px; */
    
  }
  .col-grid-4__block-grid-content-paragraph{
    /* margin-right: 20px;
   margin-left: 20px; */
   overflow:hidden;
   font-size: 14px;
width: 290px;
margin: 5px;
   /* padding-left: 10px;
    padding-right: 10px; */
    background-color: black;
    padding: 5px;
    height: 100px;
  }
  .col-grid-4__block-grid-content-paragraph-link{
    text-decoration: none;
    color: rgb(250, 246, 246);
    width: 200px;
    font-weight: bold;
    }
    .col-grid-4__block-grid-content-paragraph-link:hover{
    text-decoration: underline;
  }


  /* @media */
  .col-4-grid__block-grid{
    @media screen and(max-width: 900px)
    {display: grid;
    grid-template-columns:repeat(3,1fr);
    margin-top: 30px;}
    @media screen and(max-width: 600px)
    {display: grid;
    grid-template-columns:repeat(2,1fr);
    margin-top: 30px;}
    @media screen and(max-width: 400px)
    {display: grid;
    grid-template-columns:repeat(1,1fr);
    margin-top: 30px;}
    }


    .img{
    @media screen and(max-width:900px){
      width: 300px;
    }
    @media screen and(max-width:600px){
      width: 300px;
    }
    @media screen and(max-width:400px){
      width: 360px;
    }
  }
  .col-grid-4__block-grid-content-paragraph{
@media screen and (max-width:900px){
  width: 300px;
  font-size: 16px;
  
}
@media screen and (max-width:400px){
  width: 350px;
  font-size: 16px;
  
}
  }
</style>