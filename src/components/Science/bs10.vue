<template lang="">
    <div class="mb-3">
                        <div class="section-title mb-0 bg-dark">
                          <router-link to="Science/Cosmos"> <h4 class="m-0 text-uppercase font-weight-bold">COSMOS</h4></router-link>
                       </div>
                       <div class="bg-white border border-top-0 p-3 ">
                          
                        <div class="bg-white text-center   p-3">
                          
                          <router-link to="/Cosmos">  <img class="img-fluid " src="https://storage.googleapis.com/pod_public/1300/139326.jpg" style="object-fit: cover;"></router-link>
                               
                               
                    </div>
                       </div> 
                   </div>
                 
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
h4{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color:rgb(253, 46, 5);
font-size: 40px;
text-shadow: 2px 2px 2px white;
}
span{
 padding: 15px;
 font-size: 20px;
}
a{
   text-decoration: none;
   color: black;
}
a:hover{
 text-decoration: underline;
}
.rounded{
               border: none !important;
               box-shadow: none !important;
           }
           .album{
               background-color: transparent !important;
           }
           .d-none {
   display: block !important;
   @media screen and(max-width: 991px){
       display: none !important;
       }

}
   p{
       @media screen and(max-width: 1200px){
           display: none;
       }
       @media screen and(max-width: 991px){
           display: block;
       }
   }
</style>