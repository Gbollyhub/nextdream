<template>
<div>
   <Nav></Nav>
  <div class="content">
   <div class="about-sec">
     <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <v-card flat class="about-image" color="transparent">
      <center>
           <img src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/visa-free-arrival/h1-qatar-visa-free-arrival.jpg" alt="" width="500px" class="hidden-sm-and-down" >
         <img src="https://www.qatarairways.com/content/dam/images/renditions/horizontal-1/miscellaneous/visa-free-arrival/h1-qatar-visa-free-arrival.jpg" alt="" width="300px" class="hidden-md-and-up">
        </center>
      </v-card>
     </v-flex>
      <v-flex xs12 sm12 md6>
      <v-card flat class="about-text" color="transparent">
        <h1 class="home-header">Global Visa Assistance</h1>
      <br>
        <p class="home-sub">One very factor that can get many people down when they want to travel abroad is the issue of visa. Some do not know how to package the documents, and response to the questions asked at the immigration office across the nation leading to there inability to obtain a visa to those countries. Things will, however, be easier if you apply for the visa via a 
            travel agency they are experienced and can help you obtain your visa without any hitch.
          </p>
      </v-card>
     </v-flex>
     </v-layout> 
   </div>

   <div class="service-sec">
     <h1 class="home-header">Countries we cover</h1>
      
        <p class="home-sub">As a leading luxury tour operator we offer Canada student visa, Canada Tourist visa, Canada resident visa, Schengen Visa, Schengen Visa, South African Visa, UK Study Visa, UK Tourist visa and so on.
          </p>
    <v-layout row wrap>
    <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card1" flat >
     </v-card>
     <p class="deals-text">United Arab Emirates</p>
    </v-flex>
     <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card2" flat></v-card>
     <p class="deals-text">United States of America</p>
    </v-flex>
     <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card3" flat></v-card>
     <p class="deals-text">United Kingdom</p>
    </v-flex>
     <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card4" flat></v-card>
      <p class="deals-text">Malaysia</p>
    </v-flex>
     <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card5" flat></v-card>
      <p class="deals-text">China</p>
    </v-flex>
     <v-flex class="serv-flex" xs12 sm12 md4>
     <v-card class="serv-card6" flat></v-card>
      <p class="deals-text">Nigeria</p>
    </v-flex>
    </v-layout>
   </div>
  
   <div class="Flight-sec">
         <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <v-card flat class="about-text" color="transparent">
      <h1 class="home-header">Visa Process and Application</h1>
      <br>
        <p class="home-sub">
        As a leading luxury tour operator in Indochina we are offering a large number of bespoke holiday packages within Vietnam, Thailand, Laos, Cambodia, and Myanmar (Burma). Plan your next Holiday in Southeast Asia choosing one of our luxury tours and explore the unlimited surprises.

 

If you are planning a holiday, it is important to apply for a visa of the desired destination. Our visa experts will help you to apply for a visa to all major countries like United States (US), United Kingdom (UK), Schengen countries (Europe), Australia, Malaysia, Singapore & Thailand to name a few. Our consultant will help with application process which includes form filling, documentation support and assist in taking prior appointments which are scheduled online in advance.
          </p>
          
          <br>
      </v-card>
     </v-flex>
      <v-flex xs12 sm12 md6>
      <v-card flat class="about-image" color="transparent">
        <center>
           <img src="http://www.travelstart.co.za/blog/wp-content/uploads/2017/11/shutterstock_396494140.jpg" alt="" width="500px" class="hidden-sm-and-down" >
         <img src="http://www.travelstart.co.za/blog/wp-content/uploads/2017/11/shutterstock_396494140.jpg" alt="" width="300px" class="hidden-md-and-up">
        </center>
       
      </v-card>
     </v-flex>
     </v-layout> 
    </div>
<div class="book-now">
    <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <h1>Enjoy your next trip</h1>
      <p>Give us a call: +2348171951214</p>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <center>
        <v-btn large style="color:#cd9f58;font-family: 'Gothic-Condensed';font-size:15px; font-weight: 600; " color="white">Book Now</v-btn>
        </center>
    </v-flex>
    </v-layout>
  </div>
  <Footer></Footer>
  </div>
 
</div>
</template>

<script>
  import Nav from '../components/Nav'
    import Footer from '../components/footer'
import db from './firebaseinit.js'
import {  firebaseinit } from './firebaseinit.js'
import firebase from 'firebase'
  export default {
components: {
    Nav,
    Footer
  },
  data(){
    return{
      date: new Date().toISOString().substr(0, 10),
      menu1: false,
      menu2: false,
      items:['London','Dubai', 'New York', 'Santorini'],
      Spassword: '',
      Imagepos: 'center',
      Imagesrc:'url("http://www.wsllpaper.com/wp-content/uploads/2014/02/dubai-630x393.jpg")',
      rating: 4,
      Deals:[]
    }
  },
  created(){
    db.collection('Deals').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
              'Title' : doc.data().Title,
             'Details': doc.data().Details,
             'Price': doc.data().Price,
              'Src' : doc.data().Src
           }
           this.Deals.push(data2)
          })
        } 
      )
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
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #ffffff; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 50px;}
.service-sec{ padding: 50px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 10px 0px 10px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://s-ec.bstatic.com/images/hotel/max1024x768/143/143304246.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://cdn.tourcms.com/a/11676/434/1/large.jpg")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/1200px-Tower_Bridge_London_Feb_2006.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("https://lonelyplanetimages.imgix.net/a/g/hi/t/dcf1e0ec17d14df8fac9a7a57c7af63d-china.jpg?sharp=10&vib=20&w=1200")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("http://africanleadership.co.uk/wp-content/uploads/2015/07/nigeria.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 50px;}
.about-text{ padding: 50px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding: 150px 50px 0px 0px}
.banner-col1{padding: 150px 0px 0px 0px }
.banner-col2 {padding: 30px;}
.banner-sub {color: white; font-size: 16px;}
.banner-header {color: white; font-size: 70px;font-family: "Gothic-Condensed-Bold";}
.cover{ background: rgba(0, 0, 0, 0.473); padding: 50px 100px 0px 100px;width: 100%;height: 100%;}
.content{background: #3a3a3a;}
.banner{
  padding: 200px 100px 0px 100px;
  background-image: url("../assets/wik.jpg");
  height: 650px;
  background-size: cover;
  background-position: auto;
  }

 @media (max-width: 991px) {


 }

 @media (max-width: 767px) {
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #ffffff; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 20px;}
.service-sec{ padding: 20px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 0px 0px 0px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://s-ec.bstatic.com/images/hotel/max1024x768/143/143304246.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://cdn.tourcms.com/a/11676/434/1/large.jpg")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/1200px-Tower_Bridge_London_Feb_2006.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("https://lonelyplanetimages.imgix.net/a/g/hi/t/dcf1e0ec17d14df8fac9a7a57c7af63d-china.jpg?sharp=10&vib=20&w=1200")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("http://africanleadership.co.uk/wp-content/uploads/2015/07/nigeria.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 10px;}
.about-text{ padding: 20px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding:100px 0px 0px 0px}
.banner-col1{padding: 150px 0px 0px 0px }
.banner-col2 {padding: 30px;}
.banner-sub {color: white; font-size: 16px;}
.banner-header {color: white; font-size: 45px;font-family: "Gothic-Condensed-Bold";}
.cover{ background: rgba(0, 0, 0, 0.473); padding: 50px 100px 0px 100px;width: 100%;height: 100%;}
.content{background: #3a3a3a;}
.banner{
  padding: 150px 50px 0px 50px;
  background-image: url("../assets/wik.jpg");
  height: 500px;
  background-size: cover;
  background-position: center;
  }
 }

 @media (max-width: 479px) {
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #ffffff; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 20px;}
.service-sec{ padding: 20px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 0px 0px 0px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://s-ec.bstatic.com/images/hotel/max1024x768/143/143304246.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://cdn.tourcms.com/a/11676/434/1/large.jpg")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tower_Bridge_London_Feb_2006.jpg/1200px-Tower_Bridge_London_Feb_2006.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("https://images.unsplash.com/photo-1545424436-1be2b5c0d0fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("https://lonelyplanetimages.imgix.net/a/g/hi/t/dcf1e0ec17d14df8fac9a7a57c7af63d-china.jpg?sharp=10&vib=20&w=1200")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("http://africanleadership.co.uk/wp-content/uploads/2015/07/nigeria.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 10px;}
.about-text{ padding: 20px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding:100px 0px 0px 0px}
.banner-col1{padding: 150px 0px 0px 0px }
.banner-col2 {padding: 30px;}
.banner-sub {color: white; font-size: 16px;}
.banner-header {color: white; font-size: 45px;font-family: "Gothic-Condensed-Bold";}
.cover{ background: rgba(0, 0, 0, 0.473); padding: 50px 100px 0px 100px;width: 100%;height: 100%;}
.content{background: #3a3a3a;}
.banner{
  padding: 150px 50px 0px 50px;
  background-image: url("../assets/wik.jpg");
  height: 500px;
  background-size: cover;
  background-position: center;
  }

 }
</style>
