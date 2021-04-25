<template>
    <v-container 
        fluid
        align-content='center'
    >
        <v-row>
            <v-col/>
            <v-col>
                <h1>Home</h1>
            </v-col>
            <v-col/>
        </v-row>
    
        <v-row
            v-for='button in buttons'
            :key='button.title'
            :to='button.to'
        >
            <v-col/>
            <v-col>
                <v-btn
                    x-large
                    rounded
                    :color='button.color'
                    :to='button.to'
                >
                    {{button.title}}
                </v-btn>
            </v-col>
            <v-col/>
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
                        color: 'primary'
                    },
                    {
                        title: 'Login',
                        to: '/login',
                        color: 'primary'
                    }
                ]
            }
        }
    }
</script>