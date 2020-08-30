<template>
    <div class="footer">
  
       <center>
       <v-layout row wrap>
    <v-flex xs12 sm12 md4>
     <v-card color="transparent" flat class="footer-card">

          <img src= "../assets/next.png" alt="" width="120px" class="logo">
       <ul>
           <li><h3>Follow Us</h3></li> 
       </ul>
 <ion-icon name="logo-linkedin" style="color: white; padding-right:10px; font-size:25px;"></ion-icon>
      <ion-icon name="logo-twitter" style="color: white; padding-right:10px; font-size:25px;"></ion-icon>
       <ion-icon name="logo-rss" style="color: white; padding-right:10px; font-size:25px;"></ion-icon>
     </v-card>
    </v-flex>
    <v-flex xs12 sm12 md4>
        <v-card color="transparent" flat class="footer-card">
       <ul>
           <li><h3>Find Us</h3></li> 
           <li class="links">6A Idowu Martins 2nd floor VI, Lagos, Nigeria</li>
           <li class="links">Email: info@nextdreamluxurytravels.com</li>
           <li class="links">Phone: +23417100333, +2348171951214</li>
       </ul>

     </v-card>
    </v-flex>
    <v-flex xs12 sm12 md4>
        <v-card color="transparent" flat class="footer-card">
     <ul>
           <li><h3>About Next Dream</h3></li>  
           <li class="links" >At Next Dream luxury travels, we excel at helping you get your vacation planned.
                Not just any vacation, but exceptional vacations filled with inspiring and life-enriching experiences.</li>
       </ul>
     </v-card>
    </v-flex>
    </v-layout>
    </center>
     </div>
</template>

<style scoped>
.links {cursor: default;color: white;}
.links :hover {color: #0071bc;}
.footer-card {text-decoration: none;padding: 50px; }
.footer { height: auto; 
background: rgb(39, 39, 39); cursor: default;}
ul {text-decoration: none; list-style: none;}
li {margin-bottom: 15px;color: white;}
li :hover {color: #0071bc;}

</style>

