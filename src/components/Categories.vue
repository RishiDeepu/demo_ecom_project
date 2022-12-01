<template>
    <div>
        <div class="categoryDiv">
            <v-row>
                <div class="categoryItems ml-6" v-for="category in categories" :key="category._id">
                    <v-img :src=category.image class=" categoryImages"></v-img>
                    <p class="categorytext">{{ category.name }}</p>

                </div>
            </v-row>
        </div>

        <v-carousel height="300px" hide-delimiters class="mt-5">
            <v-carousel-item 
             v-for="item in items" 
            :key="item._id"
            >
            <!-- <div carouselDiv> -->
                <v-img class="carouselImg" :src="item.src" max-height="300px" ></v-img>
            <!-- </div> -->
            
            </v-carousel-item>
        </v-carousel>




    </div>

</template>

<script>
export default {
    name: "CategoryComponent",
    data: () => ({
        categories: [
            {
                _id: "1",
                name: "Grocery",
                image: "https://moreretail.in/frontend/dist/img/home/food-grocery-img.png"
            },
            {
                _id: "2",
                name: "Mobile",
                image: "https://www.tcl.com/usca/content/dam/tcl/products/mobile/20AX5G_TMT_Special.png"
            },
            {
                _id: "3",
                name: "Fashion",
                image: "https://img.tatacliq.com/images/i8/437Wx649H/MP000000012048914_437Wx649H_202202070534101.jpeg"
            },
            {
                _id: "4",
                name: "Electronics",
                image: "https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/shoppers-drug-mart/sdm-phx/digital/web/projects/2022/p6/electronics/home/Hero%20Electronics.png"
            },
            {
                _id: "5",
                name: "Home",
                image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?cs=srgb&dl=pexels-vecislavas-popa-1571460.jpg&fm=jpg"
            },
            {
                _id: "6",
                name: "Appliances",
                image: "https://centralappliances.ca/wp-content/uploads/2021/04/home-appliances-3.jpg"
            },
            {
                _id: "7",
                name: "Travel",
                image: "https://dizziness-and-balance.com/treatment/images/airplane.jpg"
            },
            {
                _id: "8",
                name: "Beauty,Toy & More",
                image: "https://m.media-amazon.com/images/I/41ypb39SsSL._SY450_.jpg"
            },
            // {
            //     _id: "9",
            //     name: "Eye Care",
            //     image: "https://www.asianeyehospital.com/images/Eye%20Care%20Tips.jpg"
            // },
            // {
            //     _id: "10",
            //     name: "Medical",
            //     image: "https://www.ibef.org/assets/images/Medical-Devices-Industry-2.jpg"
            // },
        ],
        items: [
          {
            _id: "1",
            src: 'https://soliloquywp.com/wp-content/uploads/2019/02/nb_pss_2.jpg',
          },
          {
            _id: "2",
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            _id: "3",
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            _id: "4",
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],


    }),
    methods: {
        a() {
            console.log("aaaaaaaaaaaaaaaaa");
        }
    }

}
</script>