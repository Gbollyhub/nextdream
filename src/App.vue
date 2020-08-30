<template>
  <v-app class="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
<style scoped>
@font-face {
font-family: "Gothic-Normal";
src: url("./fonts/Trade-Gothic-LT.ttf");
}
@font-face {
font-family: "Gothic-Normal-Bold";
src: url("./fonts/Trade-Gothic-LT-Bold.ttf");
}
@font-face {
font-family: "Gothic-Condensed";
src: url("./fonts/Trade-Gothic-LT-Condensed.ttf");
}
@font-face {
font-family: "Gothic-Condensed-Bold";
src: url("./fonts/Trade-Gothic-LT-Bold-Condensed.ttf");
}

.app { font-family: "Gothic-Normal";}
</style>
