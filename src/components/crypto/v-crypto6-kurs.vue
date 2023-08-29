<template>
  <div class="block">

    
    <div class="footer-social-block-three">
            <a href="#" class="footer-social-link-three w-inline-block"><img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a705912aaeb_facebook%20big%20filled.svg"
                loading="lazy" alt=""></a>
            <a href="#" class="footer-social-link-three w-inline-block"><img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ab37a12aaf0_twitter%20big.svg"
                loading="lazy" alt=""></a>
            <a href="#" class="footer-social-link-three w-inline-block"><img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a61f512aaed_instagram%20big.svg"
                loading="lazy" alt=""></a>
            <a href="#" class="footer-social-link-three w-inline-block"><img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a717f12aaea_youtube%20small.svg"
                loading="lazy" alt=""></a>
          </div>



    <!-- <p v-for="currency in info" :key="currency" class="currency">
      <strong> BTC/{{ currency.code }}:</strong>
      <span class="lighten">
        <strong><span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}</strong>
      </span>
    </p> -->


  </div>
</template>
<script>
import axios from 'axios'

export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => {
        this.info = response.data.bpi;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
}

</script>
    
<style lang="scss" scoped>
.footer-social-link-three{
  margin: 7px;
}
.brand{
  width: 150px;
}
.footer-social-block-three{
  margin-left: auto;
  
  
}
.block {
  // display: grid;
  // grid-template-columns: repeat(5, 1fr);
//  display: flex;
// justify-content: space-between;
  // padding-left: auto;
  // justify-content: flex-start;
  // align-items: center;
  
  display: flex;
  height: 30px;
  margin-top: 30px;
  width: 100%;
  /* margin:0 auto; */
  background:white;
  position: fixed;
  box-shadow: 10 15px 10px white;
  z-index: 1;
}
.w-inline-block{
  // margin-left: 800px;
}
.block p {
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-top: 5px;
  animation: text 15s infinite linear;
  padding-left: 100%;
  white-space: nowrap;
}

@keyframes text {
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(-160%, 0);
  }
}

// .block{
//   @media screen and (max-width: 600px){
//   height: 40px;
//   font-size: 26px;
// }
// @media screen and (max-width: 400px){
//   height: 50px;
//   font-size: 33px;
// }
// @media screen and (max-width: 350px){
//   height: 55px;
//   font-size: 45px;
// }
</style>
     
  
  