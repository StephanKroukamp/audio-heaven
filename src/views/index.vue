<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        Welcome to Audio Heaven
        {{artists}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { db } from '../plugins/fireStoreDB'

  export default {
    name: 'Index',
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
