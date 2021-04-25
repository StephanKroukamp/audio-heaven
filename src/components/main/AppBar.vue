<template>
    <v-app-bar app>
      <v-toolbar-title>Audio Heaven</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'AppBar',
  methods: {
    logout: function () {
      firebase
      .auth()
      .signOut()
      .then(() => {
        alert('Successfully logged out');
        this.$router.push('/');
      })
      .catch(error => {
        alert(error.message);
        this.$router.push('/');
      });
    }
  }
}
</script>
