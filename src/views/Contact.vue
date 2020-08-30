<template>
<div>
   <Nav></Nav>
  <div class="content">
   <div class="about-sec">
     <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <v-card flat class="about-image" color="transparent">
      <h1 class="home-header">Contact Us</h1>
      <br>
        <p class="home-sub">Thank you for your interest in 
Next Dream Luxury Travels
          </p>
          <p class="home-sub">
           Please contact us directly using the details below or complete the enquiry form and our friendly staff will be in touch shortly.
          </p>
          <br>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7077747692333!2d3.4178782147702407!3d6.431572695346777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52cd039e6f1%3A0xfad3af43d9bb2b54!2s4c%2C+6+Idowu+Martins+St%2C+Victoria+Island%2C+Lagos!5e0!3m2!1sen!2sng!4v1558073540425!5m2!1sen!2sng" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
     <br><br><br>
     <v-layout row wrap>
        <v-flex xs12 sm12 md6 class="address">
          <h2>Nigeria</h2>
     <p>4c – 6A Idowu Martins Victoria Island, Lagos</p>
     <p>Email: info@nextdreamluxurytravels.com</p>
     <p>Phone: +23417100333 , +2348171951214</p>
        </v-flex>
         <v-flex xs12 sm12 md6 class="address">
           <h2>United Arab Emirates</h2>
     <p>Al Falasi Building Al Nada, Dubai</p>
     <p>Email: info@nextdreamluxurytravels.com</p>
     <p>Phone: +971 55 935 5215</p>
         </v-flex>
     </v-layout>
      </v-card>
     </v-flex>
      <v-flex xs12 sm12 md6 class="contact-flex">
      <v-card class="about-text" color="transparent">
        <h2 style="color:white">Talk to a Next Dream Luxury Travels team member</h2>
   <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
    dark=""
      :counter="15"
      label= "Full Name"
      color="#cd9f58"
      required
    ></v-text-field>
     
     <v-text-field
      dark
      label= "E-mail"
      color="#cd9f58"
      required
    ></v-text-field>
    <v-textarea
    dark
    color="#cd9f58"
          name="input-7-1"
          label="Message"
        ></v-textarea>

  <br><br>
  <v-btn depressed large color="#cd9f58" dark>SENd Message</v-btn>
    <br>
  </v-form>
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
.address { color: white;}
.contact-flex { padding: 0px 100px;}
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #7e7e7e; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 50px;}
.service-sec{ padding: 50px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 10px 0px 10px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://wallpaperaccess.com/full/254361.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-5-lightshouse-over-sea.ashx?la=en-nz")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://zimmerstunde.at/wp-content/uploads/2017/11/travel.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/boat.jpg")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/jet.jpg")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("https://spmhire.com/wp-content/uploads/revslider/cuurent-slider-duplicate-two/spmhire.com_.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 50px;}
.about-text{ padding: 50px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding: 150px 50px 100px 50px}
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
  .contact-flex { padding: 0px 10px;}
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #ffffff; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 20px;}
.service-sec{ padding: 20px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 0px 0px 0px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://wallpaperaccess.com/full/254361.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-5-lightshouse-over-sea.ashx?la=en-nz")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://zimmerstunde.at/wp-content/uploads/2017/11/travel.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/boat.jpg")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/jet.jpg")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("https://spmhire.com/wp-content/uploads/revslider/cuurent-slider-duplicate-two/spmhire.com_.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 10px;}
.about-text{ padding: 20px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding:100px 0px 100px 0px}
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
   .contact-flex { padding: 0px 10px;}
.meal-btn {width: 15px;height: 15px;font-size:10px;}
.deals-text {padding-bottom:10px;margin-top:10px;font-size:11px;text-transform: uppercase; color: #ffffff; border-bottom: 1px solid #dbdbdb; }
.book-now {background: #cd9f58; color:white;height: auto;padding: 30px 50px 30px 50px;}
.flight-sec {padding: 20px;}
.service-sec{ padding: 20px;}
.deals-card {background-position: center; background-size: cover; height: 230px;}
.serv-flex{padding: 0px 0px 0px 0px; margin-top:20px;}
.serv-card1 {background-position: center; background-size: cover; height: 300px; background-image: url("https://wallpaperaccess.com/full/254361.jpg")}
.serv-card2 {background-position: center; background-size: cover; height: 300px; background-image: url("https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-5-lightshouse-over-sea.ashx?la=en-nz")}
.serv-card3 {background-position: center; background-size: cover; height: 300px; background-image: url("https://zimmerstunde.at/wp-content/uploads/2017/11/travel.jpg")}
.serv-card4 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/boat.jpg")}
.serv-card5 {background-position: center; background-size: cover; height: 300px; background-image: url("../assets/jet.jpg")}
.serv-card6 {background-position: center; background-size: cover; height: 300px; background-image: url("https://spmhire.com/wp-content/uploads/revslider/cuurent-slider-duplicate-two/spmhire.com_.jpg")}
.home-btn {font-family: "Arial";font-size:10px; font-weight: 800; }
.about-image { padding: 10px;}
.about-text{ padding: 20px;}
.home-header{ font-size:40px;font-family: "Gothic-Condensed"; color: #ffffff;}
.home-sub { font-size:14px;color: #ffffff;text-align: justify;}
.col-btn-text {font-family: "Gothic-Condensed-Bold";font-size:20px;}
.col-btn{background: #cd9f58;color: white;padding-top: 30px;}
.col-text {font-family: "Arial";font-size:10px; font-weight: 800;}
.col-1 {height:auto;padding: 5px 30px;font-family: "Gothic-Normal-Bold"; text-align: center; background: white;}
.about-sec {padding:100px 0px 100px 0px}
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
