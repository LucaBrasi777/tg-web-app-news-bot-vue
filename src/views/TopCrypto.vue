<template lang="">
    
    




    <img class="top-logo" src="../assets//Crypto-World-Logo-Block-TM_0a9df2d5-ed98-44e0-8408-466eb9d1715b.webp">
    <div class="main">
       
          <div class="crytocurrency" 
          v-for="item in info"
            :key="item">
      <div class="wrap">
        
<p><span class="full-name" >{{item.CoinInfo.FullName}}</span><br/>
      <span class="name">{{item.CoinInfo.Name}}</span>
      <!-- /USD :<span class="price">{{item.RAW.USD.PRICE}}</span><br/> -->
    Prof-type<span class="prof-type">({{item.CoinInfo.ProofType}})</span><br/>
    Algorithm<span class="algorithm">({{item.CoinInfo.Algorithm}})</span><br/>
     <!-- Open24: <span class="open">{{item.RAW.USD.PRICE}}</span><br/>
    High24: <span class="high">{{item.RAW.USD.HIGH24HOUR}}</span><br/> 
    Low24: <span class="low">{{item.RAW.USD.LOW24HOUR}}</span><br/>
    Volume24: <span class="open">{{item.RAW.USD.VOLUMEDAY}}</span><br/>
    Supply: <span class="open">{{item.RAW.USD.SUPPLY}}</span><br/>
    Mcap: <span class="open">{{item.RAW.USD.MKTCAP}}</span><br/>
     -->
    
</p> </div></div>  


    </div>
</template>
<script>
import axios from 'axios'
export default {
    mounted(){
      axios
      .get( 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=100&tsym=USD&api_key=6304be0b54fe2ab26b1e74beef2e1f6af9df2bfc0659b4654056642396d62ace')
      .then(response=>{

            this.info = response.data.Data
      })
      .catch(error=>{
        console.log(error)
      })
},
data(){
    return{
        info:null
    }
}
}
</script>
<style lang="css" scoped>
.top-logo{
    width: 300px;
    margin-top: 20px;
}
   .main{
    display: grid;
    grid-template-columns: repeat(4,1fr);
    margin-top: 0px;
}

.crytocurrency{
    color:black;
    background-color:white;
   margin: 10px;
   padding: 10px;
   border-radius: 20px;
   box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
   
   
}

span{

    
}
span:hover{
  
   
}
.high{
    color: green;
}
.low{
    color: red;
}
.full-name{
        font-size: 18px;
        font-weight: bold;
     }

.name1,.price1{
    font-size: 14px;
}
</style>