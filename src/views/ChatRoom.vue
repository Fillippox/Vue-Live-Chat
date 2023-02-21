<template>
    <p>Chatroom created as a Vue project Filip Rękas</p>
    <div class="container"></div>
    <NavBar/>
    <ChatWindow/>
    <NewChatForm/>
</template>

<script>
import NewChatForm from '../components/NewChatForm.vue'
import NavBar from '../components/NavBar.vue'
import getCurrentUser from '../composables/getCurrentUser.js'
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import ChatWindow from '../components/ChatWindow.vue'

export default{
    components: {NavBar, NewChatForm, ChatWindow},
    setup(){
        const { user } = getCurrentUser()
        const router = useRouter()

        watch(user, () => {
            if (!user.value){
                router.push({ name: 'welcome' })
            }
        })
    }
}
</script>

<style>
    .chat-window{
        background: #fafafa;
        padding: 30px 20px;
    }
    .created-at{
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .name{
        font-weight: bold;
        margin-right: 6px;
    }
    .messages{
        max-height: 400px;
        overflow: auto;
    }
</style>