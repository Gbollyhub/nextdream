<template>
    <div>
            <v-snackbar
      color="red"
      v-model="snackbar2"
      top
    >
  {{ error }}
     <v-btn
        color="yellow"
        flat
        @click="snackbar2 = false"
      >
        Close
      </v-btn>
    </v-snackbar>
         <v-snackbar
   color="green"
      v-model="snackbar"
      top
    >
    Registration Successful
     <v-btn
        color="red"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
       <v-icon dark>check_circle</v-icon>
    </v-snackbar>
        <v-layout row wrap>
         <v-flex xs12 sm12 md6 class="hidden-sm-and-down">
          <v-card class="auth-col-1" flat>
             <div class="cover">
              <center>
                   <router-link to="/" >   <img src= "../assets/nd.png" alt="" width="120px" class="logo"></router-link>
                   <h1 style="color:white;font-size:30px;">Next <span style="color:#002855;">Dream</span> Luxury Travels</h1>
                   <p style="color:white">
    We offer the very best in bespoke luxury safaris and holidays to any location to us it is 
    not just about selling holidays is about 
    working with our clients to ensure that their trip is an unforgettable experience.
                   </p>
              </center>
             </div>
          </v-card>
         </v-flex>
         <v-flex xs12 sm12 md6>
          <v-card class="auth-col-2">
    <br>
   <h1 class="form-header">Register</h1> 
   <p>Don't have an account?<span style="color:#002855;"> Create one now</span> takes less than a minute</p>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="Sname"
      :rules="SnameRules"
      :counter="15"
      label= "Full Name"
      color="#002855"
      required
    ></v-text-field>
     
     <v-text-field
      v-model="Semail"
      :rules="SemailRules"
      label= "E-mail"
      color="#002855"
      required
    ></v-text-field>
    <v-select
      v-model="Sgender"
      :items="gender"
      label="Gender"
      color="#002855"
      required
    ></v-select>
      <v-text-field
       hint="At least 8 characters"
        type="password"
      v-model="Spassword"
      :rules="SpasswordRules"
      label= " Create Password"
      color="#002855"
      required
      loading
    >
      <v-progress-linear
        slot="progress"
        :value="progress"
        :color="color"
        height="7"
      ></v-progress-linear>
    </v-text-field>

  <br><br>
    <v-btn
    large
      :disabled="!valid"
      @click="register"
      flat
      style="color:white;background:#002855">
      SIGNUP
    </v-btn>
    <br>
  </v-form>
  <br>
  <center><router-link to="/login" ><span style="color:#002855;">Already have an Account</span></router-link></center>
        </v-card>
         </v-flex>
        </v-layout>
    </div>
</template>

<script>
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';

  export default {
    data () {
      return {
           step: 1,
        User:'',
           date: new Date(),
          valid: false,
         snackbar: false,
          snackbar2: false,
          error: '',
      SnameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 15 characters',
      ],
      gender:['Male','Female','Others'],
      country:['Ghana','Nigeria','United States of America','United Kingdom','United Arab Emirates'],
      Scountry: '',
      Sstate:'',
      Saddress: '',
      Sname: '',
      Sgender: '',
      Sphone: '',
      Semail : '',
      Spassword: '',
      SemailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      SpasswordRules: [
        v => !!v || 'Password is required',
      ]
         }
    },
    computed: {
      progress () {
        return Math.min(100, this.Spassword.length * 10)
      },
      color () {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      }
    },
    methods: {
        clear () {
       this.Sname = '',
       this.Spassword = '',
       this.Semail = '',
       this.Saddress = '',
       this.Sstate = '',
       this.Sphone = ''
      },
        register(e){
                     db.collection('users').doc(this.Semail).set({
         Date: Date.now(),
          Fullname: this.Sname,
        Email: this.Semail, 
         Password: this.Spassword,
         Address: this.Saddress,
      Country: this.Scountry,
     State: this.Sstate,
      PhoneNumber: this.Sphone,
      Gender: this.Sgender,
       })
       .then(
         firebase.auth().createUserWithEmailAndPassword(this.Semail,this.Spassword)
          .then( user => {
               this.snackbar = true
              this.clear();
          },
          err => {
             this.error = err.message;
             this.snackbar2 = true;
          }
          )
       )
       .catch(error => console.log(err))
    e.preventDefault();
      }
    }
  }
</script>





<style scoped>
.form-header {font-size:40px;}
.cover {
    padding: 200px 100px 200px 100px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.521);
  -webkit-transition: all 600ms ease-in;
  transition: all 600ms ease-in;
}
.auth-col-1 { 
background-image: url("../assets/login.jpg"); 
height: auto; 
background-position: bottom;
background-size: cover;
}
.auth-col-2 {height: auto;padding:50px 100px 100px 100px}
.forgot {color: #002855; text-decoration: underline;}
.content { padding: 100px 0px 40px 0px; }
.content-box {padding: 50px 50px 50px 50px; width:500px;}


 @media (max-width: 991px) {


 }

 @media (max-width: 767px) {


 }

 @media (max-width: 479px) {

.form-header {font-size:40px;}
.cover {
    padding: 200px 20px 200px 20px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.521);
  -webkit-transition: all 600ms ease-in;
  transition: all 600ms ease-in;
}
.auth-col-1 { 
background-image: url("../assets/login.jpg"); 
height: auto; 
background-position: bottom;
background-size: cover;
}
.auth-col-2 {height: auto;padding:50px 30px 50px 30px}
.forgot {color: #002855; text-decoration: underline;}
.content { padding: 100px 0px 40px 0px; }
.content-box {padding: 50px 50px 50px 50px; width:500px;}


 }
</style>

