<template>
    <div>
<Nav></Nav>
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
    You are Logged in
     <v-btn
        color="red"
        flat
        @click="snackbar = false"
      >
        Close
      </v-btn>
       <v-icon dark>check_circle</v-icon>
    </v-snackbar>
    <div class="login-pack">
    <center>
          <v-card class="auth-col-2" color="transparent">
    <br>
   <h1 class="form-header">Register</h1> 
   <p style="color:white;">Don't have an account?<span style="color:#cd9f58;"> Create one now</span> takes less than a minute</p>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
    dark
      v-model="Sname"
      :rules="SnameRules"
      :counter="15"
      label= "Full Name"
      color="#cd9f58"
      required
    ></v-text-field>
     
     <v-text-field
     dark
      v-model="Semail"
      :rules="SemailRules"
      label= "E-mail"
      color="#cd9f58"
      required
    ></v-text-field>
    <v-select
    dark
      v-model="Sgender"
      :items="gender"
      label="Gender"
      color="#cd9f58"
      required
    ></v-select>
      <v-text-field
      dark
       hint="At least 8 characters"
        type="password"
      v-model="Spassword"
      :rules="SpasswordRules"
      label= " Create Password"
      color="#cd9f58"
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
      style="color:white;background:#cd9f58">
      SIGNUP
    </v-btn>
    <br>
  </v-form>
  <br>
  <center>
<router-link to="/signup" ><span style="color:#cd9f58;">Don't have an Account ?</span></router-link>
<br>
<router-link to="/" ><span style="color:#cd9f58;">Forgot Password ?</span></router-link>
  </center>
        </v-card>
    </center></div>
    </div>
</template>

<script>
 import Nav from '../components/Nav'
import db from './firebaseinit.js';
import firebase from 'firebase';
import { error } from 'util';
 
  export default {
    components: {
    Nav
  },
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
.login-pack { padding: 100px 0px; background: #3a3a3a;}
.form-header {font-size:35px;color: #ffffff;}
.cover {
    padding: 200px 100px 200px 100px;
  width: 100%;
  height: 100%;
   background-color: rgba(0, 0, 0, 0.521);
  -webkit-transition: all 600ms ease-in;
  transition: all 600ms ease-in;
}
.auth-col-2 {height: auto;padding:30px 30px 30px 30px;width:400px;}
.forgot {color: #cd9f58; text-decoration: underline;}
.content { padding: 100px 0px 40px 0px; }
.content-box {padding: 50px 50px 50px 50px; width:600px;}




 @media (max-width: 991px) {


 }

 @media (max-width: 767px) {


 }

 @media (max-width: 479px) {
.login-pack { padding: 100px 20px;}
.form-header {font-size:35px;}
.cover {
    padding: 200px 100px 200px 100px;
  width: 100%;
  height: 100%;
   background-color: rgba(0, 0, 0, 0.521);
  -webkit-transition: all 600ms ease-in;
  transition: all 600ms ease-in;
}
.auth-col-2 {height: auto;padding:30px 30px 30px 30px;width:auto;}
.forgot {color: #cd9f58; text-decoration: underline;}
.content { padding: 100px 0px 40px 0px; }
.content-box {padding: 50px 50px 50px 50px; width:500px;}




 }
</style>
