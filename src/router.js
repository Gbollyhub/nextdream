import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Signup from './views/Signup.vue'
import Contact from './views/Contact.vue'
import Login from './views/Login.vue'
import Deals from './views/Traveldeals.vue'
import Visa from './views/Visa.vue'
import Flight from './views/Flight.vue'
import Boat from './views/Boat.vue'
import Private from './views/Private.vue'
import CarHire from './views/CarHire.vue'
import Passport from './views/Passport.vue'
import firebase from 'firebase'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/get-a-passport',
      name: 'Passport',
      component: Passport,
    },
    {
      path: '/private-jet',
      name: 'Private',
      component: Private,
    },
    {
      path: '/boat-cruise',
      name: 'Boat',
      component: Boat,
    },
    {
      path: '/car-hire',
      name: 'CarHire',
      component: CarHire,
    },
    {
      path: '/flight',
      name: 'Flight',
      component: Flight,
    },
    {
      path: '/visa',
      name: 'Visa',
      component: Visa,
    },
    {
      path: '/travel-deals',
      name: 'Deals',
      component: Deals,
    },
    {
      path: '/about',
      name: 'About',
      component: About,
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact,
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta :{
        requiresGuest : true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta :{
        requiresGuest : true
      }
    }
    
  ]
})

router.beforeEach(
  (to, from, next) =>{
    if(to.matched.some(record => record.meta.requiresAuth)){
       if(!firebase.auth().currentUser){
         next({
           path: '/login',
           query: {
             redirect: to.fullPath
           }
         })
       }
       else{
         next();
       }

    }
    else   if(to.matched.some(record => record.meta.requiresGuest)){
      if(firebase.auth().currentUser){
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        })
      }
      else{
        next();
      }

   }
   else{
    next();
  }

  } 
  ); 

  export default router;