<template lang="">
    <div class="container-crypto">
        <v-crypto1/> 
       <!--<v-crypto/> -->
       <!-- <v-crypto2/>  -->
       <!-- <v-crypto3/>

       <v-crypto4/> 
       <v-crypto5/> 
       <v-crypto6/> -->
       
    </div>
</template>
<script>
import vCrypto1 from '../components/crypto/v-crypto1.vue';
import vCrypto2 from '@/components/crypto/v-crypto2.vue';
import vCrypto3 from '@/components/crypto/v-crypto3.vue';

export default {
    components: {
        vCrypto1,
        vCrypto2,
        vCrypto3

    }

}
</script>
<style lang="css" scoped>
.container-crypto {
    padding-left: 20px;
    padding-right: 20px;
}
</style>