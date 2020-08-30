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
   <h1 class="form-header">Login into your Account</h1> 
   <p style="color:white;">Don't have an account?<span style="color:#cd9f58;"> Create one now</span> takes less than a minute</p>
      <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
    dark
      v-model="Lemail"
      :rules="LemailRules"
      label= "E-mail"
      color="#cd9f58"
      required
    ></v-text-field>
        <v-text-field
        dark
        hint="At least 8 characters"
        type="password"
      v-model="Lpassword"
      :rules="LpasswordRules"
      label= "Password"
      color="#cd9f58"
      required
    ></v-text-field>
  <br><br>
    <v-btn
    large
    @click= "Login"
      :disabled="!valid"
      style="color:white;background:#cd9f58;">
      LOGIN
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
          Lemail : '',
          Lpassword: '',
         
      LemailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      LpasswordRules: [
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
            Login(e){

                 firebase.auth().signInWithEmailAndPassword(this.Lemail,this.Lpassword)
          .then( user => {
              this.snackbar = true
              this.$router.go({ path: this.$router.path })
          },
          err => {
             this.error = err.message;
             this.snackbar2 = true;
          }
          );
       e.preventDefault(); 
      }
    }
  }
</script>





<style scoped>
.login-pack { padding: 100px 0px; background: #3a3a3a;}
.form-header {font-size:35px; color: white;}
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
.content { padding: 100px 0px 40px 0px; background: #3a3a3a; }
.content-box {padding: 50px 50px 50px 50px; width:500px;}




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
