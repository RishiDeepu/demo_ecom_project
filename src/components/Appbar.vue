<template>
  <v-app-bar color="primary" app>
    <div class="logo">
      <v-img alt="logo" src="../assets/fk.png" width="160px" height="80px" />
    </div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field 
      dense label="Search For Products and Brand" 
      placeholder="Search Products,Brands and more" 
      solo
      copyIcon="mdi-content-copy"
      class="mt-7 inputTa"></v-text-field>
    </v-col>
    <v-btn class="blue--text lgBtn">Login</v-btn>
  </v-app-bar>
  <!-- <v-app-bar
        app
        color="primary"
        dark
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
  
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
            width="100"
          />
        </div>
  
        <v-spacer></v-spacer>
  
        <v-btn
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text
        >
          <span class="mr-2">Latest Release</span>
          <v-icon>mdi-open-in-new</v-icon>
        </v-btn>
      </v-app-bar> -->

</template>
  
<script>
export default {
  name: 'AppBar',
  components: {

  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('../assets/style.css');
</style>
  