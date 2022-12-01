<template>
  <v-app>
    <Appbar/>
    <Category/>
   </v-app>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Category from './components/Categories.vue'
export default {
  name: 'App',

  components: {
    Appbar,
    Category
  },

  data: () => ({
    //
  }),
};
</script>
