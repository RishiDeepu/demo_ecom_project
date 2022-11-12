<template>
  <v-app-bar color="primary" app>
    <div class="logo">
      <v-img alt="logo" src="../assets/fk.png" width="160px" height="80px" />
    </div>
    <v-col cols="12" sm="6" md="3">
      <v-text-field dense label="Search For Products and Brand" placeholder="Search Products,Brands and more" solo
        copyIcon="mdi-content-copy" class="mt-7 inputTa"></v-text-field>
    </v-col>
    <v-btn class="blue--text lgBtn">Login</v-btn>
    <p class="becomeASeller">Become a Seller</p>
    <div class="moreDiv" @click="dialog = true">
      <v-row>
        <p class="more ml-10">More</p>
        <v-icon small color="white" class="mt-1 ml-1">mdi-chevron-down</v-icon>
      </v-row>
    </div>
    <div class="cartDiv">
      <v-row>
        <v-icon small color="white" class="mt-1 ml-6">mdi-cart</v-icon>
        <p class="more ml-2">Cart</p>
      </v-row>

    </div>

    <!-- popup section  -->
    <v-dialog v-model="dialog" max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          comming soon
        </v-card-title>

        <v-card-text>
          .......in progress........
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>

    </v-dialog>

  </v-app-bar>

</template>
  
<script>
export default {
  name: 'AppBar',
  components: {

  },

  data: () => ({
    dialog: false,
    items: [
      {
        title: 'Click Me',
      },
      {
        title: 'Click Me',
      },
      {
        title: 'Click Me',
      },
      {
        title: 'Click Me 2',
      },
    ],

  }),
};
</script>
<style>
@import url('../assets/style.css');
</style>
  