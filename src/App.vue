<template>
  <v-app>
    <Appbar/>  
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Appbar from './components/Appbar.vue'

export default {
  name: 'App',

  components: {
    Appbar  
  },

  data: () => ({
    //
  }),
};
</script>
