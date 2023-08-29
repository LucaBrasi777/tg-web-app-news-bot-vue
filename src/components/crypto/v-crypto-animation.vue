<template>
   
    <div class="block">
    
     
 
   
     
 
     <p
       
       v-for="item in info"
       :key="item"
       class="currency"
     >
    
        <span class="">
          
       Last news BBC:  {{item.title}}
       </span> 
     </p>
 
  
 </div>
   </template>
     <script>
     import axios from 'axios'
     
     export default{
       data() {
     return {
       info: null,
       
     };
   },
   
   mounted(){
    axios
    .get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2e9a3f2dafb44777a86c64914a83abf1&pageSize=1')
    .then(response=>{
         this.info = response.data.articles
    })
    .catch(error=>{
      console.log(error)
    })

  }
      
      
    
     }
       
     </script>
     
     <style lang="scss" scoped>
     .main-img{
      width: 100px;
     }
    
   .block{
   height: 30px;
   width:100%;
    /* margin:0 auto;  */
   background:white;
   position: fixed;
   z-index: 1;
  border: 2px solid black;
  }
  
   

 .block p{
   text-align:center;
   color:#f70202;
   text-transform: uppercase;
   padding-top: 3px;
   animation: text 15s infinite linear;
   padding-left: 100%;
   white-space: nowrap;
   font-weight: bold;
   
 }
 @keyframes text {
   0%{
     transform: translate(0, 0);
   }
   
   100%{
     transform: translate(-160%, 0);
   }
 }
 
   .block{
    @media screen and(max-width: 400px){
      background-color: #f70202;
    }
   }
   .block p{
    @media screen and(max-width: 400px){
      color:white
    }
   }
   </style>
       
   
   