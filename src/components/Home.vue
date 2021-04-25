<template>
  <v-container>
    <v-row>
      <v-col>
        <h1>Home</h1>
      </v-col>
    </v-row>
    
    <v-row
        v-for="button in buttons"
        :key="button.title"
        :to='button.to'
    >
        <v-col>
            <v-btn
              x-large
              :color='button.color'
              :to='button.to'
            >
              {{button.title}}
            </v-btn>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: 'Home',
        data() {
            return {
                buttons: [
                    {
                        title: 'Register',
                        to: '/register',
                        color: 'success'
                    },
                    {
                        title: 'Login',
                        to: '/login',
                        color: 'success'
                    }
                ]
            }
        }
    }
</script>