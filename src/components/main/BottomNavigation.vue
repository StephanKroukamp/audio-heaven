<template>
  <v-bottom-navigation
    v-model="value"
    :background-color="color"
    shift
    exact
    router
    app
    fixed
  >
    <v-btn
    v-for="bottomNavigationButton in bottomNavigationButtons"
    :key="bottomNavigationButton.title"
    :to=bottomNavigationButton.to
    >
      <span>{{bottomNavigationButton.title}}</span>

      <v-icon>{{bottomNavigationButton.icon}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    name: 'BottomNavigation',
    data () {
      return {
        value: 1,
        bottomNavigationButtons: [
          {
            title: "Home",
            to: "/",
            icon: "mdi-home"
          },
          {
            title: "Search",
            to: "/search",
            icon: "mdi-magnify"
          },
          {
            title: "Library",
            to: "/library",
            icon: "mdi-book-open-page-variant"
          }
        ]
      }
    },
    computed: {
      color () {
        switch (this.value) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
          default: return 'blue-grey'
        }
      },
    },
  }
</script>