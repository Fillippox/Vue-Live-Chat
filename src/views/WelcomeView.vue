<template>
    <div class="welcome container">
    <p> Welcome to the chatroom</p>
    <div v-if="showLogin">
        <h2>Login to the chat room</h2>
        <LogInForm @login="enterChat"/>
        <p>No account yet? <span @click="showLogin = false"> Signup </span> instead</p>
    </div>
    <div v-else>
        <h2>Sign up to the chat room</h2>
        <SignUpForm @signUp="enterChat"/>
        <p>Already registered? <span @click="showLogin = true"> Login </span> instead</p>
    </div>
</div>
</template>

<script>
    import SignUpForm from '../components/SignUpForm.vue'
    import LogInForm from '../components/LogInForm.vue'
    import {ref} from "vue"
    import {useRouter} from 'vue-router'
    import NavBar from '../components/NavBar.vue'
    export default {
        components: {
            SignUpForm, LogInForm, NavBar
        },
        setup(){
            const showLogin = ref(true)
            const router = useRouter()
            const enterChat = () => {
                router.push({ name: 'chatroom' })
            }
            return{showLogin, enterChat}
        }
    }
</script>

<style>
.welcome{
    text-align: center;
    padding: 20px 0;
}
.welcome form{
    width: 300px;
    margin: 20px auto;
}
.welcome label{
    display: block;
    margin: 20px 0 10px;   
}
.welcome input{
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}
.welcome span{
    font-weight:bold;
    text-decoration: underline;
    cursor: pointer;
}
.welcome button{
    margin: 20px auto;
}
</style>