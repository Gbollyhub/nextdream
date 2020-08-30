<template>
<div>
  <Nav></Nav>
  
  <div class="banner">
    <v-layout row wrap>
     <v-flex xs12 sm12 md8 class="banner-col1">
    <h1 class="banner-header">Next <span style="color:#f2b50c;">Dream</span>  Luxury Travels</h1>
    <p class="banner-sub">Exceptional<span style="color:#f2b50c;"> vacations</span> filled with inspiring and <span style="color:#f2b50c;">life-enriching</span> experiences</p>
    <br>
    <br>
    <v-layout row>
 <v-flex xs12 sm12 md6 class="banner-post">
<v-card class="story-card">
              <v-layout row wrap>
                <v-flex xs12 sm12 md7>
                  <v-card-title primary-title>
                    <div>
                      
                      <h2>Turkey- Lycian trail</h2> 
                      <v-card-actions>
            <v-icon color="#f2b50c" style="font-size:15px;" >near_me</v-icon>
            <h5 class="order-date">12th April, 2019</h5>
             </v-card-actions>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 sm12 md5>
                  <v-img
                    src="https://www.thenaturaladventure.com/wp-content/uploads/2017/12/lycian-way-west_O%CC%88lu%CC%88deniz.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
    </v-flex>
    <v-flex xs12 sm12 md6 class="banner-post">
<v-card class="story-card">
              <v-layout row wrap>
                <v-flex xs12 sm12 md7>
                  <v-card-title primary-title>
                    <div>
                      
                      <h2>Dubai- Burj-Khalifa</h2> 
                      <v-card-actions>
            <v-icon color="#f2b50c" style="font-size:15px;" >near_me</v-icon>
            <h5 class="order-date">12th April, 2019</h5>
             </v-card-actions>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 sm12 md5>
                  <v-img
                    src="https://www.myholidaysadventures.com/images/tours/photos/1_870_1-1.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
    </v-flex>
    
    </v-layout>
     </v-flex>
     <v-flex xs12 sm12 md3 class="banner-col2">
       <v-card class="banner-testimony">
         <div class="col-cover">
           <div style="padding: 0px 20px 0px 20px; ">
     <v-card-actions>
            <v-icon color="#f2b50c" >near_me</v-icon>
            <h4 class="order-date">12th April, 2019</h4>
             </v-card-actions>
           
           </div>
           
           <div style="position:absolute; bottom: 0px; padding: 0px 20px 70px 20px; ">
             <h1>Morroco Amazing Trip</h1>
             <p>Morroco is one of the oldest recognised countries in Africa, with its first declaration of sovereignity dating back to the year 1755</p>
            <v-rating v-model="rating" color="yellow darken-3"></v-rating>
           </div>

         </div>

       </v-card>
     </v-flex>
     <v-flex xs12 sm12 md1>
       
     </v-flex>
    </v-layout>
  </div>
  <div class="section1">
    <center>
    <h1 class="deals-header2">Welcome to Next <span style="color:#f2b50c;">Dream Luxury</span> Travels</h1>
    <br>
    <p class="deals-sub2">At Next Dream luxury travels, we excel at helping you get your vacation planned. 
      Not just any vacation, but exceptional vacations filled with inspiring and life-enriching experiences.
       We offer the very best in bespoke luxury safaris and holidays to any location to us it is not just about
       selling holidays is about working with our clients to ensure that their trip is an unforgettable experience.</p>
</center>
<v-layout row wrap>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-11-tauranga.ashx?la=en-nz"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
            Flights
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://www.canon.co.nz/-/media/new-zealand/stories/rach-stewart/rach-stewart-5-lightshouse-over-sea.ashx?la=en-nz"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
            Visa
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://zimmerstunde.at/wp-content/uploads/2017/11/travel.jpg"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
            Travel Deals
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://previews.123rf.com/images/jakkapan/jakkapan1702/jakkapan170200072/72012444-vintage-tropical-beach-seascape-with-palm-tree-in-summer-landscape-of-coast-vintage-effect-color-ton.jpg"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
            Boat Cruise
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://fortunedotcom.files.wordpress.com/2015/01/158315398.jpg"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
           Private
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>
<v-flex xs12 sm12 md4 class="about-flex">
 <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
      flat
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://spmhire.com/wp-content/uploads/revslider/cuurent-slider-duplicate-two/spmhire.com_.jpg"
        height = 280px
      >
        <v-expand-transition>
          <div
            v-if= true
            class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal  white--text"
            style="height: 100%; font-size:35px;"
          >
            Car Hire
          </div>
        </v-expand-transition>
      </v-img>
    </v-card>
  </v-hover>
</v-flex>





</v-layout>
  </div>


  <div class="jet">
<div class="col-cover2">
 <center><h1 class="deals-header">Luxury <span style="color:#f2b50c;">Flights </span></h1>
 <br>
           <p class="deals-sub">Private travel is made easy through next dream luxury travels services. Contact us today for more details.
next dream luxury travels is a flight broker and as such arranges carriage by air on behalf of its customers by chartering aircraft
from third-party aircraft operators as agent of its customers.</p>
           </center>
         <br><br>
               <v-layout row>
 <v-flex xs12 sm12 md6 class="banner-post">
<v-card class="story-card">
              <v-layout row wrap>
                <v-flex xs12 sm12 md7 class="jet">
                  <v-card-title primary-title>
                    <div>
                      
                      <h2>Jet Plane A330-200</h2> 
                      <v-card-actions>
            <v-icon color="#f2b50c" style="font-size:15px;" >near_me</v-icon>
            <h5 class="order-date">Fleet</h5>
             </v-card-actions>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 sm12 md5>
                  <v-img 
                    src="https://www.thenaturaladventure.com/wp-content/uploads/2017/12/lycian-way-west_O%CC%88lu%CC%88deniz.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
    </v-flex>
    <v-flex xs12 sm12 md6 class="banner-post">
<v-card class="story-card">
              <v-layout row wrap>
                <v-flex xs12 sm12 md7>
                  <v-card-title primary-title>
                    <div>
                      
                      <h2>Jet Plane A330-200</h2> 
                      <v-card-actions>
            <v-icon color="#f2b50c" style="font-size:15px;" >near_me</v-icon>
            <h5 class="order-date">Fleet</h5>
             </v-card-actions>
                    </div>
                  </v-card-title>
                </v-flex>
                <v-flex xs12 sm12 md5>
                  <v-img
                    src="https://www.myholidaysadventures.com/images/tours/photos/1_870_1-1.jpg"
                    height="125px"
                    contain
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-card>
    </v-flex>
    </v-layout>
    <br><br>
    <center><v-btn large dark color="#f2b50c">Load More</v-btn></center>
</div>
  </div>



  <div class="top-deals">
    <center><h1 class="deals-header">Travel <span style="color:#f2b50c;"> Deals </span></h1>
           <p class="deals-sub">As a leading luxury tour operator in Indochina we are offering a large number of bespoke holiday packages within Vietnam, Thailand, Laos, Cambodia, and Myanmar (Burma). Plan your next Holiday in Southeast Asia choosing one of our luxury tours and explore the unlimited surprises.</p>
           </center>
           <v-layout row wrap>
           <v-flex xs12 sm12 md3 class="deals-flex" v-for="post in Deals.slice(0,4)" :key="post.id" >
            <v-card class="deals-card" v-bind:style="{backgroundImage: Imagesrc, backgroundPosition: Imagepos }">
             <div class="col-cover">
           <div style="padding: 0px 20px 0px 20px; ">
     <v-card-actions>
            <v-icon color="#f2b50c" style="font-size:18px;">near_me</v-icon>
            <h4 class="order-date">12th April, 2019</h4>
             </v-card-actions>
           
           </div>
           
           <div style="position:absolute; bottom: 0px; padding: 0px 20px 20px 20px;color:white; ">
             <h3>{{ post.Title }}</h3>
             <p style="font-size:12px;">{{ post.Details }}</p>
             <p> ₦{{ post.Price }}</p>
                </div>
              
         </div>
            </v-card>
           </v-flex>
           </v-layout>
           <br>
           <center><v-btn large dark color="#f2b50c"> Load More</v-btn></center>
              
  </div>
  <div class="book-now">
    <v-layout row wrap>
 <v-flex xs12 sm12 md6>
      <h1>Enjoy your next trip</h1>
      <p>Give us a call: +2348171951214</p>
    </v-flex>
    <v-flex xs12 sm12 md6>
      <center>
        <v-btn large style="color:#f2b50c;" color="white">Book Now</v-btn>
        </center>
    </v-flex>
    </v-layout>
  </div>
  <Footer></Footer>
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

           }
           this.Deals.push(data2)
          })
        } 
      )
  }

  }
</script>

<style scoped>
.jet {padding-right: 20px;}
.about-flex {padding-right: 10px; padding-left : 10px;margin-top: 10px;margin-bottom: 10px;}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.section1 {padding: 60px 200px 60px 200px;height: auto; background-image:url('../assets/white2.jpg');background-position:center;background-size: cover;}
.col-cover2 {color:white;width: 100%; height: 100%; background: rgba(0, 0, 0, 0.541);padding: 80px 200px 80px 200px}
.jet {height:auto; background-image:url('../assets/jet.jpg');background-position:center;background-size: cover; }
.book-now {background: #f2b50c; color:white;height: auto;padding: 30px 50px 30px 50px;}
.deals-card { border-radius: 5px;box-shadow: 1px 5px 30px -3px #091424;height: 300px;}
.deals-flex {padding-right: 10px; padding-left : 10px;margin-top: 30px;margin-bottom: 30px;}
.deals-sub2{color:#1a1a1a;}
.deals-header2{color: #1a1a1a;font-size:40px;}
.deals-sub{color:white;}
.deals-header{color: white;font-size:40px;}
.top-deals {background-image:url('../assets/section.png');
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;height: auto;padding: 60px 100px 50px 100px;;}
.story-card {background: rgba(0, 0, 0, 0.678); color:white;}
.col-cover {color:white;width: 100%; height: 100%; background: rgba(0, 0, 0, 0.432);padding: 30px 0px 100px 0px}
.banner-col2{padding: 100px 10px 0px 10px;}
.banner-col1{padding: 170px 20px 0px 50px;}
.banner-testimony{
   height: 540px;
  background-image:url('../assets/pic2.jpg');
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;
}
.banner-post {padding: 10px;}
.banner-sub{color: white; font-size: 16px;}
.banner-header {color: white;font-size: 65px; font-weight: 600}
  .banner {
    padding: 0px 0px 0px 0px;    
  height: 650px;
  background-image:url('../assets/bg2.jpg');
  background-position:bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;
}


 @media (max-width: 991px) {


 }

 @media (max-width: 767px) {


 }

 @media (max-width: 479px) {
.about-flex {padding-right: 10px; padding-left : 10px;margin-top: 10px;margin-bottom: 10px;}
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
.section1 {padding: 30px 20px 30px 20px;height: auto; background-image:url('../assets/white2.jpg');background-position:center;background-size: cover;}
.col-cover2 {color:white;width: 100%; height: 100%; background: rgba(0, 0, 0, 0.541);padding: 40px 20px 40px 20px}
.jet {height:auto; background-image:url('../assets/jet.jpg');background-position:center;background-size: cover; }
.book-now {background: #f2b50c; color:white;height: auto;padding: 30px 20px 30px 20px;}
.deals-card { border-radius: 5px;box-shadow: 1px 5px 30px -3px #091424;height: 300px;}
.deals-flex {padding-right: 10px; padding-left : 10px;margin-top: 30px;margin-bottom: 30px;}
.deals-sub2{color:#1a1a1a;}
.deals-header2{color: #1a1a1a;font-size:40px;}
.deals-sub{color:white;}
.deals-header{color: white;font-size:40px;}
.top-deals {background-image:url('../assets/section.png');
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;height: auto;padding: 60px 20px 50px 20px;;}
.story-card {background: rgba(0, 0, 0, 0.678); color:white;}
.col-cover {color:white;width: 100%; height: 100%; background: rgba(0, 0, 0, 0.432);padding: 10px 0px 30px 0px}
.banner-col2{padding: 20px 20px 0px 20px;}
.banner-col1{padding: 170px 20px 0px 20px;}
.banner-testimony{
   height: 350px;
  background-image:url('../assets/pic2.jpg');
  background-position:center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;
}
.banner-post {padding: 10px;}
.banner-sub{color: white; font-size: 16px;}
.banner-header {color: white;font-size: 40px; font-weight: 600}
  .banner {    
    padding: 0px 0px 30px 0px;    
  height: auto;
  background-image:url('../assets/bg2.jpg');
  background-position:bottom;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll, scroll;
}

 }
</style>
