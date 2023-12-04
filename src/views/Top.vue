
<template>
  <div>
    <v-expansion-panels variant="" class="text-center">
      <v-expansion-panel v-for="crypto in displayedCryptocurrencies" :key="crypto.id" title="" class="p-2" text="">
        <v-expansion-panel-text></v-expansion-panel-text>
        <img class="bd-placeholder-img card-img-top" :src="crypto.image" :alt="crypto.name">
        <span style="font-size:12px;font-weight:bold">{{crypto.name}}</span>:<span style="font-size:12px;">{{ crypto.current_price }}$</span>
        <p>
          <span :class="{'positive-change': crypto.price_change_percentage_24h > 0, 'negative-change': crypto.price_change_percentage_24h < 0}">
            <span v-if="crypto.price_change_percentage_24h !== null">24h: {{ crypto.price_change_percentage_24h.toFixed(2) }}%</span>
          </span>
        </p>
        <span v-if="crypto.total_volume !== null">24h Volume: ${{ crypto.total_volume.toLocaleString() }}</span>
        <div v-if="crypto.exchange_with_max_volume">
          Largest Volume Exchange: {{ crypto.exchange_with_max_volume.name }} ({{ crypto.exchange_with_max_volume.symbol }})
          <br/>
          Volume: ${{ crypto.exchange_with_max_volume.volume.toLocaleString() }}
        </div>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="pagination">
      <span class="prev-bt" @click="prevPage" :disabled="currentPage === 1">Prev</span>
      <span class="page-numbers text-dark">{{ currentPage }} / {{ pageCount }}</span>
      <span class="next-bt" @click="nextPage" :disabled="currentPage === pageCount">Next</span>
    </div>
  </div>
</template>




<script>
 import axios from 'axios';
 
 export default {
 data() {
 return {
   cryptocurrencies: [],
   currentPage: 1,
   pageCount:1,
   perPage: 100, 
 };
 },
 computed: {
 displayedCryptocurrencies() {
   const startIndex = (this.currentPage - 1) * this.perPage;
   const endIndex = startIndex + this.perPage;
   return this.cryptocurrencies.slice(startIndex, endIndex);
 },
 pageCount() {
   return Math.ceil(this.cryptocurrencies.length / this.perPage);
 },
 },
 mounted() {
 this.fetchCryptocurrencies();
 },
 methods: {
 async fetchCryptocurrencies() {
   try {
     const response = await axios.get(
       'https://api.coingecko.com/api/v3/coins/markets',
       {
         params: {
         vs_currency: 'usd',
          ids:'bitcoin, ethereum, tether, binance-coin, cardano, xrp, solana, polkadot, dogecoin, usd-coin, avalanche, terra, elrond, chainlink, litecoin, bitcoin-cash, stellar, vechain, filecoin, tron, eos, monero, cosmos, tezos, ftx-token, neo, celsius-network, dash, iota, zcash, the-graph, hedgetrade, decentraland, arweave, sushiswap, basic-attention-token, zilliqa, 0x, augur, civic, dharma, band-protocol, edgeware, staked-ether, ankr, ren, verge, crypto-com-coin, ampleforth, request, truefi, illuvium, keep3rv1, smooth-love-potion, aelf, atletico-madrid-fan-token, bitcoin-gold, celo-dollar, fan-token, lina, waykichain, hive, mithril, wazirx, xinfin-network, nebulas, aavegotchi, math-token, harmony, singularitynet, small-love-potion, perlin, omni, btse-token, maidsafecoin, kleros, x-cash, grin, ravencoin, uquid-coin, nxt, zap, elrond-gold, byteball-bytes, chia, adex, aventus, dmarket, hypercash, opium, digixdao, tokenomy, chromia, latoken, district0x, allianceblock, keeperdao, gameswap',
           order: 'market_cap_desc',
           per_page: 100,
           page: 1,
           sparkline: false,
         },
       }
     );
     this.cryptocurrencies = response.data;
   } catch (error) {
     console.error('Error fetching cryptocurrencies:', error);
   }
 },
 nextPage() {
   if (this.currentPage < this.pageCount) {
     this.currentPage++;
     this.scrollToTop();
   }
 },
 prevPage() {
   if (this.currentPage > 1) {
     this.currentPage--;
     this.scrollToTop();
   }
 },
 scrollToTop() {
     
     const element = document.getElementById('top-page');
     if (element) {
       element.scrollIntoView({ behavior: 'smooth' });
     }
   },
 },
 };
 </script> 
<style lang="css" scoped>
.pagination{
 cursor: pointer;
}
#intro3 {
    background-image: url("https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2022-12/4330ba29-1f5d-42c0-96c9-440f2cda248e.jpg");
    height: 100vh;
  }

img{
 width: 30px;
}
h1{
text-align: center;
}
span{
font-size: 10px;
}
.symbol{
text-transform: uppercase;
font-size: 15px;
}
.name{
font-size: 17px;
font-weight: bold;
}
li {
list-style: none;
}

.pagination {
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
}

.prev-bt,
.next-bt {
margin: 8px;

color: rgb(248, 2, 2);

padding: 7px;
font-weight: bold;
}
.card{
background-color: none;
margin: 10px;
}
.card:hover{
box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
}
/* .prev-bt:hover,
.next-bt:hover {
 background-image: linear-gradient(to right, #040d1d, #053684);
 color: white;
} */

.positive-change {
color: green;
}

.negative-change {
color: red;
}
.card{
          border: none !important;
          box-shadow: none !important;
      }
      .card{
          background-color: transparent !important;
      }
      
</style>
