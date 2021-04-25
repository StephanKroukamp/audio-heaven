<template>
  <v-app>
    <AppBar/>

    <v-main>
      <router-view></router-view>
    </v-main>

    <BottomNavigation/>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import BottomNavigation from './components/BottomNavigation'

export default {
  name: 'App',
  components: {
    AppBar,
    BottomNavigation
  }
};
</script>
