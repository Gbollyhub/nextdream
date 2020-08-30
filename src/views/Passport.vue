<template>
<div>
   <Nav></Nav>
    <v-layout row justify-center>
    <v-dialog v-model="dialog" width="800px" >
  
      <v-card class="dialog">
        <v-card-title>
          <span class="headline">{{ Name }}</span>
        </v-card-title>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
              <img :src= Logo alt="" width="200px;">
            </v-flex>
        <v-flex xs12 sm12 md8>            
 <v-card-text>Investment Options : {{ Investment }}</v-card-text>
 <v-card-text>Cost per Person : {{ Person }}</v-card-text>
 <v-card-text>Cost for Family of 4 : {{ Family }}</v-card-text>
 <v-card-text>Time to Citizenship : {{ Period }}</v-card-text>
 <v-card-text>EU Visa Free : {{ EU }}</v-card-text>
 <v-card-text>No of Visa Free Countries : {{ Country }}</v-card-text>
 <v-card-text>Unique Value Proposition : {{ Value }}</v-card-text>
            </v-flex>
        </v-layout>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="brown darken-1" flat="flat" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  <div class="content">
   <div class="about-sec">
     <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <v-card flat class="about-image" color="transparent">
      <center>
           <img src="https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2017/11/iStock-472626012-620x413-1.jpg" alt="" width="500px" class="hidden-sm-and-down" >
         <img src="https://www.blackenterprise.com/wp-content/blogs.dir/1/files/2017/11/iStock-472626012-620x413-1.jpg" alt="" width="300px" class="hidden-md-and-up">
        </center>
      </v-card>
     </v-flex>
      <v-flex xs12 sm12 md6>
      <v-card flat class="about-text" color="transparent">
        <h1 class="home-header">Fast Track Citizenship</h1>
      <br>
        <p class="home-sub">Legally obtain a second passport in 3 to 6 months.
Keep your current nationality while enjoying the benefits of your new one.
Our fast citizenship programs are given immediately below. 
<br>
<br>Click any row to view details.
* Applicable for Single Applicants or Families of 4, including 2 kids below 12 years of age.
Fees include Government Program Cost, Due Diligence and Government Processing Fees. Fees listed above do NOT include Legal Fees. If your kids are above 12 years of age or if you want to include extra dependents to your application, for full breakdown of fees, please contact us.

          </p>
      </v-card>
     </v-flex>
     </v-layout> 
   </div>

     <div class="flight-sec">
       <h1 class="home-header">Citizenship Programs</h1>
       <p class="home-sub">
         Click to view more informations
       </p>
          <v-layout row wrap>
    <v-flex class="serv-flex" xs12 sm12 md3 v-for="post in Deals" :key="post.id">
     <v-card  flat class="deals-card" v-bind:style="{backgroundImage: post.Src, backgroundPosition: Imagepos }">
         <div class="cover">
 <v-btn @click= "show(post)" flat dark> <em>View</em></v-btn>
         </div>
     </v-card>
     <p class="deals-text"> {{post.Name}} | </p>
    
    </v-flex>
    </v-layout>
     </div>
   <div class="Flight-sec">
         <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <v-card flat class="about-text" color="transparent">
      <h1 class="home-header">Why a Second Passport</h1>
      <br>
        <p class="home-sub">
            Citizenship by investment is the process of obtaining a second citizenship and passport by investing in the economy of the host country. Citizenship by investment programs legally confer citizenship status faster than traditional immigration processes and do so without requiring investors to put their lives on hold or reside in that country. And, yes, you do keep your current passport & nationality.
            </p>
          <p class="home-sub">
              Advantages <br>
              •	Legally obtain a reputable & irrevocable second citizenship in months. <br>
•	All nationalities can apply without discrimination.<br>
•	No need to reside in the country of choice.<br>
•	You are protected by the Government’s citizenship law.<br>
•	Apply for E2 visa via your 2nd nationality.<br>
•	Keep your current nationality.

          </p>
          <br>
           <p class="home-sub">
              Visa Free Travel <br>
            •	Visa free travel in up to 173 countries. <br>
•	Remain the UK for 6 months in a calendar year. <br>	
•	Reside within the European Union (Cyprus/Malta citizenships). <br>
•	Exceptional visa free access to Russia, China, USA. <br>
•	Easy access for visas from the few countries that do require them. <br>


          </p>
          <br>
          <p class="home-sub">
          Tax Benefits <br>
•	No Wealth, Gift, Inheritance, Foreign, Income or Capital Gains Tax. <br>
•	No income tax if person does not reside in the country of citizenship. <br>
•	Lowest corporate tax rates in the EU & globally. <br>
•	No restrictions on the repatriation of profits & capital. <br>
•	Tax Holidays on specific investments. <br>
          </p>
      </v-card>
     </v-flex>
      <v-flex xs12 sm12 md6>
      <v-card flat class="about-image" color="transparent">
        <center>
           <img src="https://legal-malta.com/LegalMalta/files/a3/a34f7af7-c817-4070-bbb9-8f0bace3b82f.jpg" alt="" width="500px" class="hidden-sm-and-down" >
         <img src="https://legal-malta.com/LegalMalta/files/a3/a34f7af7-c817-4070-bbb9-8f0bace3b82f.jpg" alt="" width="300px" class="hidden-md-and-up">
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
        dialog: false,
        currentName : '',
      menu1: false,
      menu2: false,
      items:['London','Dubai', 'New York', 'Santorini'],
      Spassword: '',
      Imagepos: 'center',
      Imagesrc:'url("http://www.wsllpaper.com/wp-content/uploads/2014/02/dubai-630x393.jpg")',
      rating: 4,
      Deals:[],
      Name: 'uy',
      Investment: '',
      Person: '',
      Family: '',
      Period: '',
      EU: '',
      Country: '',
      Value: '',
      Src: '',
      Logo: ''
    }
  },
  created(){
    db.collection('Passport').get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
           const data2 = {
              'Name' : doc.data().Name,
             'Investment': doc.data().Investment,
             'Person': doc.data().Person,
              'Family' : doc.data().Family,
              'EU' : doc.data().EU,
              'Period' : doc.data().Period,
              'Country' : doc.data().Country,
              'Value' : doc.data().Value,
              'Src' : doc.data().Src,
              'Logo' : doc.data().Logo
           }
           this.Deals.push(data2)
          })
        } 
      )
  },
  methods:{
      show(post){
              db.collection('Passport').where( "Name", "==", post.Name).get().then(
        querySnapshot => {
          querySnapshot.forEach(doc =>{
         
              this.Name = doc.data().Name,
             this.Investment = doc.data().Investment,
             this.Person = doc.data().Person,
              this.Family = doc.data().Family,
              this.EU = doc.data().EU,
              this.Period = doc.data().Period,
              this.Country = doc.data().Country,
              this.Value = doc.data().Value,
              this.Src = doc.data().Src,
              this.Logo = doc.data().Logo
          })
        } 
      ).then( this.dialog = true)
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
.dialog {padding: 30px; z-index: 999;}
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
.cover{ background: rgba(0, 0, 0, 0.473); padding: 100px 0px 0px 0px;width: 100%;height: 100%; text-align: center;}
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
.cover{ background: rgba(0, 0, 0, 0.473); padding: 100px 0px 0px 0px;width: 100%;height: 100%;}
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
.cover{ background: rgba(0, 0, 0, 0.473); padding: 100px 0px 0px 0px;width: 100%;height: 100%;}
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
