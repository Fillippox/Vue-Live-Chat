<template>
    <form>
        <textarea
            placeholder = 'Type a message and hit enter to send...'
            v-model = "message"
            @keypress.enter.prevent="handleSubmit"
        ></textarea>
        <div class="error">{{ error }}</div>
    </form>
</template>

<script>
    import {ref} from 'vue'
    import getCurrentUser from '../composables/getCurrentUser'
    import { timestamp } from '../firebase/config'
    import useCollection from '../composables/useCollection.js'

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

</style>