<template>
    <form>
        <textarea class="comment-box"
            placeholder = 'Type your best message...'
            v-model = "message"
            @keypress.enter.prevent="handleSubmit"
        ></textarea>
        <vue-emoji-picker v-model="message"></vue-emoji-picker>
        <div class="error">{{ error }}</div>
    </form>
</template>


<script>
import {ref} from 'vue'
import EmojiPicker from 'vue-emoji-picker'
import getCurrentUser from '../composables/getCurrentUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection.js'
import VueEmojiPicker from 'vue-emoji-picker'

export default{
    setup(){
        const { user } = getCurrentUser()
        const {addDoc, error} = useCollection('messages')
        const message = ref('')
        const handleSubmit = async () => {
            const chat = {
                name: user.value.displayName,
                message: message.value,
                createdAt: timestamp()
            }
            await addDoc(chat)
            //console.log(chat)
            if(!error.val){
                message.value=''
            }
        }
        return {message, handleSubmit, error}
    }
}
</script>


<style>

/* Box for commenting */
.comment-box {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 5px #ccc;
    width: 100%;
    height: 200px;
    resize: none;
}


</style>