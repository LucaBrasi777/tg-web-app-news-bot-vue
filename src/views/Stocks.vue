<template lang="">
  
  <div class="container text-center ">
 
<select   style="color:white" placeholder="search" class="select text-white" v-model="selectedCompany">
 
  <option class="text-white" style="color:white" v-for="value in stock" :key="value.stock" :value="value">{{ value.companyName }}</option>
</select>
</div>
<div  v-if="selectedCompany">
 
  <!-- <button @click="closeInfo" class="text-white button p-2 rounded-2 mt-1">close </button>
   -->


  <p class="card-text card-body text-black">
                <h5 class="card-title "><strong> {{ selectedCompany.companyName }}</strong></h5>
                <u class="">  <span>{{ selectedCompany.symbol }}</span></u><br/>
                <u class="">  <span class="">Price:{{ selectedCompany.price}} $</span></u><br/>
                  <u><span>Mcap:{{selectedCompany.mktCap}}</span></u><br/>
                  <u class=""> <span>Exchange:{{selectedCompany.exchange}}</span></u><br/>
                <u class="">  <span>Industry:{{selectedCompany.industry}}</span></u><br/>
                <u class="">   <span>Ceo:{{selectedCompany.ceo}}</span></u><br/>
                <u class=""> <span>Country:{{selectedCompany.country}}</span></u><br/>
                 
                <u class="">  <span>Phone:{{selectedCompany.phone}}</span></u><br/>
                <u class="">  <span>Address:{{selectedCompany.address}}</span></u><br/>
                <u class="">   <span>City:{{selectedCompany.city}}</span></u><br/>
                <u class="">  <span>State:{{selectedCompany.state}}</span></u><br/>
               <p> <u class="">  <span><strong>{{selectedCompany.description}}</strong></span></u></p><br/>
                

                <button class="text-white " @click="openWebsite(selectedCompany.website)"><strong  class="text-white">{{selectedCompany.website}}</strong></button>

                 
                 
              </p> 

              <button @click="closeInfo" class="text-white button p-1 rounded-2 mt-1">close </button>
  

</div>


<br/><br/>
    
    
   
  <!-- </div>


   


  </div> -->







</template>
<script lang="">
import axios from 'axios'

export default {
 name: 'Stocks',
 data() {
   return {
    // isInfoOpen: false,
    img:'https://mir-s3-cdn-cf.behance.net/projects/404/80440e173273301.Y3JvcCwyNDk5LDE5NTUsMCww.jpg',
     stock: [],
     errors: [],
     selectedCompany: null
   }
 },

methods:{
  closeInfo() {
  this.selectedCompany = null; 
},

  openWebsite(url) {
  window.open(url, '_blank');
}
},


 created() {
   axios.get('https://financialmodelingprep.com/api/v3/profile/AAPL,NVDA,TSLA,AMD,INTC,MDB,SPCE,V,DAL,DOCU,OKTA,AMZN,PINS,TRIP,GDDY,DIS,MCD,NOK,UPWK,IBM,FB,ZM,OZON,NFLX,EA,HLT,H,CCL,META?apikey=6c9be8fcb7df7894ba5ae48be14935fc')
   .then(response => {
     this.stock = response.data
     console.log(response)
   })
   .catch(e => {
     this.errors.push(e)
   })
 }
}
</script>
<style lang="scss" scoped>
.text-dark{
font-size:9px;
color:white;
}


.select{
  margin-top: 10px;
  width: 180px;
  list-style: none;
  border:2px solid rgb(248, 244, 244);
  padding:3px;
  border-radius: 5px;
}
.select{
    //  border: none !important;
      box-shadow: none !important;
      list-style: none;
    }
u,option{
  text-decoration: none;
  
}

u,h5,p{
  color:white;
}
.button{
  border:2px solid red;
}
.button:hover{
  background-color: red;
}
</style>