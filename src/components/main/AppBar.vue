<template>
  <v-app-bar
    app
  >
    <v-tabs
      centered
    >
      <v-tab
        v-for='link in links'
        :key='link.title'
        :to='link.to'
      >
        <v-icon>{{link.icon}}</v-icon>
      </v-tab>
    </v-tabs>

    <v-avatar
      v-if='isUserAuth'
      color='primary'
    />
  </v-app-bar>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters } from 'vuex';

export default {
  name: 'AppBar',
  data () {
    return {
      links: [
        {
          title: 'Home',
          to: '/',
          icon: 'mdi-home'
        },
        {
          title: 'Search',
          to: '/search',
          icon: 'mdi-magnify'
        },
        {
          title: 'Library',
          to: '/library',
          icon: 'mdi-book-open-page-variant'
        }
      ]
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
  },
  computed: {
    ...mapGetters(['getUser', 'isUserAuth'])
  }
}
</script>