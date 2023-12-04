<template lang="">
    <div class="container-fluid p-0 ">

     




     
        <nav class="navbar navbar-expand-lg bg-black navbar-dark py-2 py-lg-0 px-lg-5">
         
         
         <span style="cursor:pointer" @click="toggleSearch"> <svg  xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
          
         
          <bread/>
         
                  <!-- <router-link  @click="openHome" to="/5" href="#" class="home" style="color:white">
                    <img class=" m-0 display-4 img-brand" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd"></router-link> -->
              
               
             

            <button type="button" style="" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span style="" class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0 mt-5">
                    <!-- <router-link  @click="openHome" to="/5" href="#" class="   home" style="color:white">Home</router-link> -->
                    <div class="nav-item dropdown " style="margin-top:13px;">
                        <span  class=" dropdown-toggle home" data-toggle="dropdown" style="color:white;cursor:pointer;">News categories </span>
                        <ul class="dropdown-menu rounded-0  bg-black" style="">
                          <li><router-link  @click="closedHome" to="/General" href="#" class="link" style="color:">Main</router-link></li>
                          <li><router-link  @click="closedHomeOpenBus" to="/Business" href="#" style="color:" class="link">Business</router-link></li>
                          <li><router-link  @click="closedHome" to="/Tech" href="#" style="color:" class="link">Technology</router-link></li>
                     <li><router-link  @click="closedHome" to="/Sport" href="#" style="color:" class="link">Sport</router-link></li>
                     <li><router-link  @click="closedHome" to="/Health" href="#" style="color:" class="link">Health</router-link></li>
                     <li><router-link  @click="closedHome" to="/Science" href="#" style="color:" class="link">Science</router-link></li>
                     <li><router-link  @click="closedHome" to="/Entertainment" href="#" style="color:" class="link">Entertainment</router-link></li>
                </ul>
                        
                    </div> 
                    <router-link to="/Science/Cosmos"  class="text-white">Cosmos</router-link>
                  
                    <router-link  @click="closedBusiness"   to="/Business/Crypto" href="#" style="color:white" class="">Crypto</router-link> 
                    <router-link to="/Signin"  class="text-white">Sign in</router-link>
                           <!-- <router-link to="/Tags" href="#" class="text-white">Articles</router-link> -->
                         
                           <button  @click="compose({})" href="#" class="text-white">About</button>
                           <!-- <router-link to="/Login" href="#" class="text-white">Contact</router-link> -->
                           <router-link to="/Tags" class="text-white">Articles</router-link>
                           <router-link to="/Tags"  class="text-white">Video</router-link> 
                           <!-- <router-link to="/Tags" href="#" class="text-white">Donate</router-link> 
                          -->
                          <div class="text-center">
    <v-btn
    style="margin-top:10px"
    class=" "
      color="black"
    >
      Donate

      <v-dialog
        v-model="dialog"
        activator="parent"
        width="auto"
      >
        <v-card>
          <v-card-text>
            <p>
            <img style="width:50px" class=" m-0 display-4 img" src="https://i.pinimg.com/736x/c8/05/83/c80583d4410bcd1bd6cce620087b40e0.jpg">
            <span>bc1pas43m5m9kf2cnmt3xylaqshwul00ch249zdy6s0q5ad8wa4urr7sp2h0cs</span>
            </p>
            <p>
            <img style="width:50px" class=" m-0 display-4 img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ethereum_logo.svg/482px-Ethereum_logo.svg.png">
            <span>bc1pas43m5m9kf2cnmt3xylaqshwul00ch249zdy6s0q5ad8wa4urr7sp2h0cs</span>
            </p>
            <p>
            <img style="width:50px" class=" m-0 display-4 img" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3516745/tether-logo-icon-md.png">
            <span>bc1pas43m5m9kf2cnmt3xylaqshwul00ch249zdy6s0q5ad8wa4urr7sp2h0cs</span>
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-btn>
  </div>
                         
               <v-dialog  width="500">
  <template v-slot:activator="{ props }">
   <v-btn style="background-color:black;color:white;margin-top:10px" v-bind="props" text="">
    My news <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter" viewBox="0 0 16 16">
  <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"/>
</svg> </v-btn> 
               
  </template>
 
  <template v-slot:default="{ isActive }">
    <v-card title="My news"  class="bg-white ">
      <v-card-text>
        <v-select
        class="mySelect"
        clearable
        chips
        label="News and articles filter by language"
        :items="language.map(item => item.name)"
        v-model="selectedLanguageNames"
        multiple
        variant="underlined"
      ></v-select>
<dat/>
<dat2/>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="close"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>


<v-dialog
    class="dialog"
            v-model="dialogCompose"
            width="">
            <v-card>
                <v-card-title class=" black1" >
                 
                  <img class="brand" style="width:120px" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd" />
           
                </v-card-title>
                <v-card-text class=" ">
                 
      <div class="modal-body">
       <p>Hub News are your trusted source for up-to-the-minute news covering the world of cryptocurrencies and the dynamic realm of business. Our mission is to provide our readers with the freshest and most reliable information needed to make informed decisions in the fields of investment, finance, and technology.</p>
      <p>Hub News monitor the latest developments in the cryptocurrency world, analyze the market, and provide reviews of leading digital assets. Whether you're an experienced trader or a newcomer to the crypto space, our content will help you stay informed about crucial events.</p>
      <p>Hub News keep tabs on business news and trends that can impact the global economy. Our articles offer analytical insights into significant happenings in the business world, corporate innovations, and global trends.
</p>
      <p>Hub News adhere to the highest standards of journalism and strive to deliver trustworthy information. Our team of professional journalists and experts ensures that you receive only high-quality content.
</p>
      <p>Hub News update our website as soon as important information surfaces, ensuring you're always in the know.</p>

      <p>Hub News cover a wide range of subjects, from cryptocurrencies and finance to technology and business, catering to the interests of all our readers.</p>
      <p>Hub News provide an analytical perspective on events, along with expert commentary to help you understand their implications.</p>
      <p>With us, you gain access to a world of news and information that can empower you to make informed decisions. Welcome to our website, where information becomes knowledge, and knowledge is power.</p>
      </div>
     </v-card-text>
                <v-card-actions class="pa-5">
                    <v-btn class="ml-auto" @click="saveDraft()" outlined color="red">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


                
                
                   
                  
                </div>
               
            </div>
          <!-- <img class="img"  src="https://newshub.bbc.co.uk/assets/images/bbc-newshub-logo.jpg"/> -->
        <router-link  @click="openHome" to="/" href="#" class="home" style="color:white">
                    <img class=" m-0 display-4 img-brand" src="https://play-lh.googleusercontent.com/p2McSemKnQBO2wXgsjj8GNWjLHyDSdgSkK1YLx07Hzn9xIycsaUD_v9wmftK22FryQ=w600-h300-pc0xffffff-pd"></router-link> 
        </nav>
        
        
<div class="wrap">
<div class="div " > 
   
  
  <div v-for="item in news"
  
  :key="item">
  

  <img class="img-fluid w-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
 <img class="img-fluid w-100" v-else src="https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/science/global-international-connections.jpg" style="object-fit: cover;">
                             
 <a class="title fw-bold" :href="item.url" 
         target="_blank "> <p class="p-3"> 
         {{item.title}}</p></a>
      
  
  </div> 
  </div>
</div>


        <span class="marquee"
v-for="item in news2"
:key="item"
>

      <p>
        <!-- <img style="width:200px" :src="item.urlToImage"/> -->
        
        
       <span style="font-size:18px;color:white">{{item.title}}{{item.content}}</span> </p>
      </span>
      <div  v-if="showSearchInput">
       
        <input
          v-model="searchT"
          placeholder="Search news"
          v-on:input="onSearchType"
          class="form-control input"
          aria-label="Search"
          type="text"
        >
        
      </div>
     
    </div>
   
</template>
<script>
// 1fb27fc9978d48ecadb4bdc77705325e API tech
import geo from '../../components/GeoApi.vue'
import dat from '../../components/data.vue'
import dat2 from '../../components/data2.vue'
import bread from '../Bread/breadCrums.vue'
import axios from "axios";
export default {
  components:{bread,geo,dat,dat2},
  data() {
    return {
      dialog: false,
      dialogCompose: false,
        activeMessage: {},
        composeMessage: {},
        valid: true,
      selectedLanguageNames: [],
      language: [
          {
            name: 'english',
            id: 14,
          },
          {
            name: 'russian',
            id: 52,
          },
          {
            name: 'ukraine',
            id: 65,
          },
        ],
      showSearchInput: false,
      news: [],
      searchT: "",
      news2: [],
      
    activeLang: 'English',
    dialog: false,
    languageMenu: false,
    };
  },
  watch: {
      selectedLanguageNames(newSelectedLanguageNames) {
        
        const selectedLanguageIds = newSelectedLanguageNames.map(name => {
          const language = this.language.find(language => language.name === name);
          return language ? language.id : null;
        });
        
        localStorage.setItem('selectedLanguage', JSON.stringify(selectedLanguageIds.filter(Boolean)));
      },
    },
    mounted() {
     
      const savedSelectedLanguageIds = localStorage.getItem('selectedLanguage');
      if (savedSelectedLanguageIds) {
       
        const selectedLanguageNames = JSON.parse(savedSelectedLanguageIds).map(id => {
          const Language = this.Language.find(Language => Language.id === id);
          return country ? country.name : null;
        });
        this.selectedLanguageNames = selectedLanguageNames.filter(Boolean); // Remove null values
      }
    },
  mounted() {
    document.addEventListener("click", this.handleDocumentClick);
    axios
      .get(
        "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=1"
      )
      .then((response) => {
        this.news2 = response.data.items;
      })
      .catch((error) => {
        console.log("error");
      });
  },
  
  beforeDestroy() {
 
  document.removeEventListener("click", this.searchClose);
},
  methods: {
    compose() {
        this.dialogCompose = true
    },
    saveDraft() {
        this.dialogCompose = false
    },
    handleMenuItemClick (lang) {
      this.activeLang = lang.title;
    },
    handleAddLanguage () {
      alert('handle add new language!');
    },
    toggleSearch() {
      this.showSearchInput = !this.showSearchInput;
    },
    handleDocumentClick(event) {
     
      const searchContainer = document.querySelector(".div");
      if (searchContainer && !searchContainer.contains(event.target)) {
       this.searchClose();
        
      }
    },
    openHome() {
  
  setTimeout(() => {
    const openHome = document.getElementById('home');
    if (openHome) {
      openHome.style.display = "block";
    }
  }, 0);
},
    

//     closedHome() {
//  setTimeout(() => {
//     const closeHome = document.getElementById('home');
//     if (closeHome) {
//       closeHome.style.display = "none";
//     }
//   }, 0);
// },
    
closedHomeOpenBus(){
  setTimeout(() => {
     const close = (document.getElementById('home').style.display="none")
    const openBusiness = document.getElementById('business');
    if (openBusiness) {
      openBusiness.style.display = "block";
    }
  }, 0);
},
closedBusiness() {
  const close = (document.getElementById('home').style.display="none")
  
  setTimeout(() => {
    const closeBusiness = document.getElementById('business');
    if (closeBusiness) {
      closeBusiness.style.display = "none";
    }
  }, 0);
},

    onSearchType: function () {
      const search = (document.querySelector(".div").style.display = "block");
      var url =
        "https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=3&Language=14&Page=2&PageSize=100" +
        "&q=" +
        this.searchT;

      axios
        .get(url)
        .then((response) => {
          this.news = response.data.items;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    
    searchClose() {
       
        const searchClosed = document.querySelector(".div");
      if (searchClosed) {
        searchClosed.style.display = "none";
      }
        this.searchT = ""
    },
  },
};
</script>
<style lang="scss" scoped>
.img{
  width:200px;
  @media screen and(max-width:368px){
    width:100px;
  }
}
.link:hover{
  // background-color:white;
  // color:black;
text-decoration:underline;
}
.link{
  color:white;
}

.mySelect::v-deep .v-chip {
background-color:rgb(136, 132, 132);
color: white;
border:2px solid white;
font-weight:bold;
button {
  color: white;
}
}
.n{
  z-index:10000;
}

.span{
  font-size: 10px;
}
.h1{
  font-family: cursive;
  font-size: 40px;

}
::placeholder{
  color: rgb(5, 5, 5);
}
.form-control{
  color: rgb(0, 0, 0);
 
  box-shadow: none !important;
  border: none !important;
  border-radius:none !important;
  
}


a{
  color: black;
  text-decoration: none;
  margin: 15px;
}
.marquee {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 0, 0);
  color: white;
  white-space: nowrap;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  z-index: 100;

  padding: 5px 0;
}

.marquee p {
  display: inline-block;
  padding-left: 100%; 
  animation: marquee 45s linear infinite; 
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.input{
  box-shadow:1px 2px 3px black;
  
  
}
.close{
  position: fixed;
  left:258px;
  top:105px;
 }
.div {
box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  position: fixed;
  border: 2px solid white;
  display: none;
  

  border-radius: 5px;

  top: 118px;
  padding: 20px;

   height: 700px;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: white;
  color: rgb(3, 3, 3);
  z-index: 5000;
  //   display: none;
  @media screen and (max-width: 1279px) {
  top:135px;
  }
  // @media screen and (max-width: 367px) {
  //   width: 300px;
  // }
  // @media screen and (max-width: 330px) {
  //   width: 270px;
  // }
  // @media screen and (max-width: 300px) {
  //   width: 250px;
  // }
}
.title{
    color: black;
    text-decoration: none;
}
.msj{
  box-shadow: none;
  @media screen and(max-width:1150px){
    display: none;
  }
}
.img-brand{
  width:100px;
  @media screen and(max-width: 310px){
    width:70px ;
  }
}
// .navbar-toggler{
//   @media screen and(max-width: 280px){
//     width:50px ;
//   }
// }
</style>