<template>
  <div>
    <div class="header">
   <router-link to="/"><img id="logo" src="../assets/next.png"  width="100px"> </router-link>
<div class="hidden-sm-and-down">
    <ul id="navlist">
    <router-link to="/"><li>Home</li> </router-link>
  <router-link to="/about"> <li>About</li> </router-link>
  <router-link to="/travel-deals"> <li>Travel Deals</li></router-link>
  <router-link to="/visa">  <li>Visa</li> </router-link>
  <router-link to="/flight">  <li>Flight</li></router-link>
  <router-link to="/boat-cruise"> <li>Boat Cruise</li></router-link>
  <router-link to="/private-jet"> <li>Private Jet</li></router-link>
   <router-link to="/car-hire"> <li>Car Hire</li></router-link>
      <router-link to="/get-a-passport"> <li>Get a Passport</li></router-link>
    <router-link to="/contact"> <li>Contact</li></router-link>
    <router-link to="/login">
    <div class="nav-login">
    <span><v-icon style="color:#75592e;font-size:14px;margin-right:10px;">person</v-icon></span>   <li class="col-text">LOG IN</li>
    </div></router-link>
    <div class="nav-book">
     <span><v-icon style="color:#75592e;font-size:14px;margin-right:10px;">date_range</v-icon></span>  <li class="col-text">BOOK NOW</li>
    </div>
   
  </ul>
</div>
 <div class="hidden-md-and-up">
   <div>
     <center><v-icon @click.stop="drawer = !drawer" style = "line-height:70px; float:right;font-size:40px;color:#cd9f58;width:70px;" >menu</v-icon> </center>
      
   </div>
   
 <div class="nav-book2">
     <span><v-icon style="color:#75592e;font-size:14px;margin-right:10px;">date_range</v-icon></span>  <li>BOOK NOW</li>
    </div>
    </div>

</div>


      <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      class="panel"
    >
    
     <center>
       
       <div class = "nav-mobile">
       <div class= "nav-mobile-link" @click="toHome">  <strong>Home</strong> </div>
         <div class= "nav-mobile-link" @click="toAbout"> <strong>About Us</strong> </div>
          <div class= "nav-mobile-link" @click="toFlight">  <strong>Flight</strong> </div>
           <div class= "nav-mobile-link" @click="toDeal" >  <strong>Travel Deals</strong> </div>
            <div class= "nav-mobile-link"  @click="toVisa">  <strong>Visa</strong> </div>
             <div class= "nav-mobile-link" @click="toBoat">  <strong>Boat Cruise</strong> </div>
              <div class= "nav-mobile-link" @click="toPrivate">  <strong>Private Jet</strong> </div>
               <div class= "nav-mobile-link" @click="toCarHire"> <strong>Car Hire</strong> </div>
               <div class= "nav-mobile-link" @click="toPassport">  <strong>Get a Passport</strong> </div>
                <div class= "nav-mobile-link" @click="toContact"> <strong>Contact us</strong> </div>
        
        <br>


              <div v-if="!isLoggedin">
                  
                <v-btn large color= "#1a1a1a" dark class="log-btn"  @click= "login" depressed> Login/Signup </v-btn> 
                </div>
          
                <div v-if="isLoggedin">
                  
                <v-btn large color= "#1a1a1a" dark class="log-btn"  @click= "logout" depressed> Logout </v-btn> 
                </div>
                </div>
     </center>
       
    </v-navigation-drawer>
  </div>
</template>


<script>
import db from '../views/firebaseinit.js'
import firebase from 'firebase'
export default {
  name: 'App',

  data () {
    return {
      drawer :false,
      user:'',
       isLoggedin : false,
     dialog:false
    }
  },
    created(){
            if(firebase.auth().currentUser){
              
                this.isLoggedin = true;
                this.currentUser = firebase.auth().currentUser.email;
                 db.collection('users').where('Email', '==', this.currentUser).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
            this.user = doc.data().Fullname
          })
        } 
      )
            }
    },
  methods:{
     login(){
      this.$router.push("/login")
    },
    toHome(){
      this.$router.push("/")
    },
    toAbout(){
      this.$router.push("/about")
    },
    toBoat(){
      this.$router.push("/boat-cruise")
    },
    toVisa(){
      this.$router.push("/visa")
    },
    toFlight(){
      this.$router.push("/flight")
    },
    toCarHire(){
      this.$router.push("/car-hire")
    },
     toDeal(){
      this.$router.push("/travel-deals")
    },
    toPrivate(){
      this.$router.push("/private-jet")
    },
    toPassport(){
      this.$router.push("/get-a-passport")
    },
    toContact(){
      this.$router.push("/contact")
    },
     toAuth(){
      this.$router.push("/login")
    },
     logout(){
           firebase.auth().signOut()
           .then(() => {
               this.$router.go({ path: this.$router.path })
           });
       }
  }
}
</script>


<style scoped>
@font-face {
font-family: "Gothic-Normal";
src: url("../fonts/Trade-Gothic-LT.ttf");
}
@font-face {
font-family: "Gothic-Normal-Bold";
src: url("../fonts/Trade-Gothic-LT-Bold.ttf");
}
@font-face {
font-family: "Gothic-Condensed";
src: url("../fonts/Trade-Gothic-LT-Condensed.ttf");
}
@font-face {
font-family: "Gothic-Condensed-Bold";
src: url("../fonts/Trade-Gothic-LT-Bold-Condensed.ttf");
}
a :hover {color: #cd9f58;}
a {text-decoration: none;color: #ffffff;transition: all 1s}
.col-text {font-family: "Arial";font-size:10px;font-weight:800;}
.nav-book2 {float:right;font-weight: bold; font-size:12px; line-height: 70px; width:130px;display: inline-block; background: #cd9f58; height: 70px;color:white; text-align:center;}
.nav-login {  border-bottom: 1px solid #e0e0e0;font-weight: bold;font-size:12px; border-left: 1px solid #dadada; line-height: 70px; width:100px;display: inline-block; background: #3a3a3a; height: 70px; color:#ffffff; text-align:center;}
.nav-book {font-weight: bold; font-size:12px; line-height: 70px; width:150px;display: inline-block; background: #cd9f58; height: 70px;color:white; text-align:center;}

.panel {
   z-index: 9999;
}
.header {
    z-index: 999;
  position: fixed;
  width: 100%;
  padding: 0px 0px 0px 40px;
  background: #3a3a3a; 
  clear: both;
  height: 70px;
  border-bottom: 1px solid #e0e0e0;
}
  #logo {
    float:left;
    margin:0;
  }
  
  #navlist {
    float: right;
  }
    
    li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
    font-family: "Gothic-Normal-Bold";
    }
      a:link{
        line-height: 70px;
        height: 70px;
      }

.nav-mobile-link {color:#1d1d1d;font-size: 60px; margin: 20px 0px;}
.nav-mobile-link a {color: rgb(36, 36, 36); text-decoration: none;}
.nav-mobile-link :hover {color: #cd9f58; transition: all 1s; }
.nav-mobile { padding: 40px 0px 40px 0px}
.toolbar {height: 70px; background: rgb(255, 255, 255); padding: 5px 0px 5px 0px;}
.nav-link {display: inline-block;padding-left: 10px; color: rgb(43, 226, 52)}
.nav-pack {display: inline-block; float: right; }
.logo {display: inline-block; padding: 5px 0px 5px 0px;}
    @media (max-width: 479px) {
      .panel {
   z-index: 9999;
}
.nav-mobile-link {font-size: 14px;text-transform: uppercase; margin: 30px 0px;}
.nav-mobile-link a {color: rgb(36, 36, 36); text-decoration: none;}
.nav-mobile-link :hover {color: #1f1f1f; transition: all 1s; }
.nav-mobile { padding: 10px 0px 10px 0px}
}
</style>
