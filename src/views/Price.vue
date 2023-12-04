<template>
    <div class="crypto-prices mt-4">
      <!-- <v-btn color="primary">TopCrypto </v-btn> -->
        <button  @click="compose({})" class="btn text-white ">TOP</button>
      <div v-for="crypto in cryptos" :key="crypto.name" class="crypto-box">
        <h6 class="fw-bold">{{ crypto.name }}</h6>
        <p class="fw-bold">Price: ${{ crypto.price ? crypto.price.toFixed(2) : 'Loading' }}</p>
      </div>
    </div>
    <v-dialog
    class="dialog"
            v-model="dialogCompose"
            width="500px">






            
            <v-card>
                <v-card-title class=" black1" >
                 
                  <!-- <img class="brand" style="width:120px" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd" /> -->
           
                </v-card-title>
                <v-card-text class="pa-5">
                  <div class="modal-body">
       <top/>
      </div>
     </v-card-text>
                <v-card-actions class="pa-5">
                    <v-btn class="ml-auto" @click="saveDraft()" outlined color="red">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

  </template>
  
  <script>
  import axios from "axios";
  import top from '@/views/Top.vue'
  export default {
    components:{top},
    data() {
      return {
        dialogCompose: false,
        activeMessage: {},
        composeMessage: {},
        valid: true,
        cryptos: [
          { name: "Bitcoin", symbol: "bitcoin" },
          { name: "Ethereum", symbol: "ethereum" },
        //   { name: "Ripple", symbol: "ripple" },
          { name: "Tether", symbol: "tether" },
        //   { name: "Binance Coin", symbol: "binancecoin" },
        //   { name: "Cardano", symbol: "cardano" },
        //   { name: "Solana", symbol: "solana" },
         
        ],
      };
    },
    methods: {
      compose() {
        this.dialogCompose = true
    },
    saveDraft() {
        this.dialogCompose = false
    },
      async fetchCryptoPrices() {
        for (const crypto of this.cryptos) {
          try {
            const response = await axios.get(
              `https://api.coingecko.com/api/v3/simple/price?ids=${crypto.symbol}&vs_currencies=usd`
            );
            const data = response.data;
            crypto.price = data[crypto.symbol].usd;
          } catch (error) {
            console.error(`Error fetching ${crypto.name} prices:`, error);
          }
        }
      },
    },
    mounted() {
      this.fetchCryptoPrices();
  
     
      setInterval(this.fetchCryptoPrices, 60000);
    },
  };
  </script>
  
  <style scoped>
  
  .crypto-prices {
    display: flex;
    justify-content: space-around;
    margin: 3px;
  }
  
  .crypto-box {
    text-align: center;
    padding: 3px;
  }
  
  h6, p {
    font-size: 14px;
    color: rgb(254, 250, 250);
  }
  a{
    text-decoration: none;
    color: white;
  }
  </style>
  