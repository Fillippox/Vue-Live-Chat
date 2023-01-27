<template>
    <nav v-if ="user">
        <div>
            <p> Hey there {{ user.displayName }} display name here </p>
            <p class="email"> Currently logged in as {{user.email}} email</p>
        </div>
        <button @click="handleClick">Logout</button>
    </nav>
</template>

<script>
    import useLogOut from '../composables/useLogOut.js'
    import getCurrentUser from '../composables/getCurrentUser.js'
    export default {
        setup(){
            const {logOut, error} = useLogOut()
            const { user } = getCurrentUser()
            const handleClick = async () => {
                await logOut()
                if(!error.value){
                    console.log('user logged out')
                }
            }
            return { handleClick, user }
        }
    }
</script>

<style>
nav{
    padding: 20px;
    border-bottom: 1px solid #eeee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin: 2px auto;
    font-size: 16px;
    color: #444;
}
nav p.email{
    font-size: 14px;
    color: #999;
}

</style>