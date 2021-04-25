<template>
  <v-container 
    fluid
    align-content='center'
  >
    <v-row>
      <v-col/>
      <v-col>
        <h1>Register</h1>
      </v-col>
      <v-col/>
    </v-row>

    <v-form @submit.prevent='register'>
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
            Register
          </v-btn>
        </v-col>
        <v-col/>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Register',
  data() {
    return {
      email: 'johndoe@gmail.com',
      password: 'xyz123'
    }
  },
  methods: {
    ...mapActions(['signUpAction']),
    register() {
      this.signUpAction({ email: this.email, password: this.password });
    }
  }
}
</script>