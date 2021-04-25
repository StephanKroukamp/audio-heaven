<template>
  <v-container 
    fluid
    align-content='center'
  >
    <v-row>
      <v-col/>
        <v-col>
          <h1>Login</h1>
        </v-col>
      <v-col/>
    </v-row>

    <v-form @submit.prevent='login'>
      <v-row>
        <v-col>
          <v-text-field
              v-model='email'
              label='Email'
              type='email'
              required
          />
        </v-col>
      </v-row>
        
      <v-row>
        <v-col>
          <v-text-field
            v-model='password'
            label='Password'
            type='password'
            required
          />
        </v-col>
      </v-row>
      
      <v-row>
        <v-col/>
        <v-col>
          <v-btn
            color='primary'
            type='submit'
          >
            Login
          </v-btn>
        </v-col>
        <v-col/>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Login',
  data() {
    return {
      email: 'johndoe@gmail.com',
      password: 'xyz123'
    }
  },
  mounted() {
    this.authAction();
  },
  methods: {
    ...mapActions(["authAction"]),
    login: function () {
      firebase
      .auth()
      .signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push('/library');
      })
      .catch(error => {
          alert(error.message);
      });
    }
  },
  computed: {
    ...mapGetters(["getUser", "isUserAuth"])
  }
}
</script>