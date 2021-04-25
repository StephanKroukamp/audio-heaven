<template>
  <v-container>
    <v-row>
        <v-col>
            <v-card>
                <v-card-title class="headline">
                    Unlimited music now
                </v-card-title>

                <v-card-subtitle>Listen to your favorite artists and albums whenever and wherever, online and offline.</v-card-subtitle>

                <v-card-actions>
                <v-btn
                    text
                    to="/search">
                    Listen Now
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>

    <v-row>
        <v-col>
            <v-parallax
                src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
            >
                <v-row
                    align="center"
                    justify="center"
                >
                    <v-col
                        class="text-center"
                        cols="12"
                    >
                        <h1 class="display-1 font-weight-thin mb-4">
                            Audio Heaven
                        </h1>
                        
                        <h4 class="subheading">
                            Fucking sweet music app
                        </h4>
                    </v-col>
                </v-row>
            </v-parallax>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../../plugins/fireStoreDB'

  export default {
    name: 'home',
    data() {
      return {
        artists: [],
      }
    },
    firestore: {
      artists: db.collection('artists')
    },
  }
</script>
