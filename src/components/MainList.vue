<template>
    <div>
        <div class="mainListDiv" v-for="d in list" :key="d._id">
            <div class="firstDiv">
                <v-row class="firstRow" align="center" justify="center">
                    <p class="name"> {{ d.name }}</p>
                    <!-- <p>view All</p>  -->
                </v-row>
                <v-row class="secondRow" justify="center">
                    <v-img class="imggg" :src=d.image>

                    </v-img>
                </v-row>

            </div>
            <div class="secondDiv">
                <v-slide-group>
                    <v-slide-item v-for="n in d.products" :key="n._id" class="ml-0">
                        <div class="cards" align="center" justify="center">
                            <v-img class="cardImg" :src=n.image></v-img>
                            <p class="text">{{ n.name }}</p>
                            <p class="text">{{ n.price }}</p>

                        </div>
                    </v-slide-item>
                </v-slide-group>
            </div>

        </div>
        <br>
        

        


    </div>

</template>

<script>
export default {
    name: "MainListComponent",
    data: () => ({
        model: null,
        list: [
            {
                _id: "1",
                name: "Best of Electronics",
                image: "https://dis-prod.assetful.loblaw.ca/content/dam/loblaw-companies-limited/creative-assets/shoppers-drug-mart/sdm-phx/digital/web/projects/2022/p6/electronics/home/Hero%20Electronics.png",
                products: [
                    {
                        _id: "1",
                        name: "Fridge",
                        price: "12,450/-",
                        image: "https://media.croma.com/image/upload/v1663978759/Croma%20Assets/Large%20Appliances/Refrigerator/Images/224939_0_go7ztm.png"

                    },
                    {
                        _id: "2",
                        name: "Top mirrorless Camera",
                        price: "50,000/-",
                        image: "https://purepng.com/public/uploads/large/purepng.com-photo-cameraphoto-cameracameracapturing-imagesphotographsdslrstill-camera-17015283671435cyhp.png"

                    },
                    {
                        _id: "3",
                        name: "Printer",
                        price: "20,000/-",
                        image: "https://w7.pngwing.com/pngs/418/791/png-transparent-printer-computer-icons-printing-printer-electronics-canon-electronic-device-thumbnail.png"

                    },
                    {
                        _id: "4",
                        name: "Monitor",
                        price: "60,000/-",
                        image: "https://www.freepnglogos.com/uploads/lcd-png/pln-quot-lcd-monitor-planar-38.png"

                    },
                    {
                        _id: "5",
                        name: "Laptop",
                        price: "1,60,000/-",
                        image: "https://www.pngfind.com/pngs/m/60-602361_hp-laptop-png-hd-laptop-png-images-hd.png"

                    },
                ]
            },
            {
                _id: "2",
                name: "Best of GIft",
                image: "https://centralappliances.ca/wp-content/uploads/2021/04/home-appliances-3.jpg",
                products: [
                    {
                        _id: "1",
                        name: "Fridge",
                        price: "12,450/-",
                        image: "https://media.croma.com/image/upload/v1663978759/Croma%20Assets/Large%20Appliances/Refrigerator/Images/224939_0_go7ztm.png"

                    },
                    {
                        _id: "2",
                        name: "Top mirrorless Camera",
                        price: "50,000/-",
                        image: "https://purepng.com/public/uploads/large/purepng.com-photo-cameraphoto-cameracameracapturing-imagesphotographsdslrstill-camera-17015283671435cyhp.png"

                    },
                    {
                        _id: "3",
                        name: "Printer",
                        price: "20,000/-",
                        image: "https://w7.pngwing.com/pngs/418/791/png-transparent-printer-computer-icons-printing-printer-electronics-canon-electronic-device-thumbnail.png"

                    },
                    {
                        _id: "4",
                        name: "Monitor",
                        price: "60,000/-",
                        image: "https://www.freepnglogos.com/uploads/lcd-png/pln-quot-lcd-monitor-planar-38.png"

                    },
                    {
                        _id: "5",
                        name: "Laptop",
                        price: "1,60,000/-",
                        image: "https://www.pngfind.com/pngs/m/60-602361_hp-laptop-png-hd-laptop-png-images-hd.png"

                    },
                ]
            },

        ],

    })
}

</script>