<template lang="">
    <div class="containe mt-5">
         
        <div class="">
    <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/uY4rGStXjJY?si=igpwdZB0pu_ake0V" allowfullscreen></iframe>
    </div>
  </div>
        <nasa/>
        <nasa2/>
    </div>
    <div class="container-fluid ">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                  
                  
                   <nasa3/>
                   <!-- <nasa4/> -->
                   <nasa6/>
                    <!-- <bs6/> -->
                 
                  </div>
                    </div>
             <div class="col-lg-4">
                    
                   <nasa5/>
                
                  </div>
            </div>
        </div>
    </div>
   
    
    
    
</template>
<script>
import nasa from '../components/cosmos/nasa.vue'
import nasa2 from '../components/cosmos/nasa2.vue'
import nasa3 from '../components/cosmos/nasa3.vue'
import nasa4 from '../components/cosmos/nasa4.vue'
import nasa5 from '../components/cosmos/nasa5.vue'
import nasa6 from '../components/cosmos/nasa6.vue'
export default {
    components:{
        nasa2,nasa,nasa3,nasa4,nasa5,nasa6
    }
    
}
</script>
<style lang="scss" scoped>
    .containe{
        background-color: rgb(11, 10, 10);
    }
</style>