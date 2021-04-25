<template>
   <v-container>
    <v-row>
      <v-col>
        Library Page
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'library',
    data () {
      return {
        tab: null,
        tabs: [
          {
            title: "Playlists",
            to: "/library/playlists",
            icon: "mdi-playlist-music-outline"
          },
          {
            title: "Artists",
            to: "/library/artists",
            icon: "mdi-account-music"
          },
          {
            title: "Albums",
            to: "/library/albums",
            icon: "mdi-album "
          }
        ]
      }
    }
  }
</script>
