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

    <v-row>
      <v-col>
        <v-form @submit.prevent='submit'>
            <v-text-field
                v-model='email'
                label='Email'
                type='email'
                required
            />
            
            <v-text-field
                v-model='password'
                label='Password'
                type='password'
                required
            />

            <v-btn
                type='submit'
            >
                submit
            </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import firebase from 'firebase/app';

export default {
    name: 'Login',
    data() {
        return {
            email: 'johndoe@gmail.com',
            password: 'xyz123'
        }
    },
    methods: {
        submit: function () {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
                console.log('Successfully logged in');
                
                this.$router.push('/dashboard');
            })
            .catch(error => {
                alert(error.message);
            });
        }
    }
}
</script>