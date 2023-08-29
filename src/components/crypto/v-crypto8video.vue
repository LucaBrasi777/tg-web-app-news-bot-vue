<template lang="">
    
        <section class="section-3">
   
   <video id="44976736-4e8d-ad55-d8d3-ab40e8a976da-video" 
    class="video"
   autoplay="" 
   loop="" 
   style="width:100%" 
   muted="" 
   playsinline="" 
   data-wf-ignore="true" 
   data-object-fit="cover">
       <source src="../../videos/istockphoto-1002409896-640_adpp_is.mp4" data-wf-ignore="true">
       <source src="../../videos/istockphoto-1002409896-640_adpp_is.mp4" data-wf-ignore="true">
     </video>
    

 
 
 
</section>


</template>
<script>
import axios from 'axios'
export default {
  mounted() {
    axios
      .get('https://min-api.cryptocompare.com/data/v2/news/?categories=BTC,ETH&excludeCategories=Sponsored')
      .then(response => {

        this.news = response.data.Data
      })
      .catch(error => {
        console.log(error)
      })

  }
}
</script>
<style lang="scss" scoped>
.p1 {
  padding-left: 10px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 50px;
}

.img {
  width: 550px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
</style>