<template>
  <v-app-bar
    app
  >
    <v-toolbar-title>Audio Heaven</v-toolbar-title>

    <v-spacer/>

    <v-btn
      icon
      x-large
    >
      <v-avatar
        color="primary"
      >
        <span class="headline">CJ</span>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app';

export default {
  name: 'AppBar',
  data () {
    return {
    }
  },
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