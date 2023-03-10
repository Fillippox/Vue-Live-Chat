import { ref } from 'vue'
import { projectAuth } from '../firebase/config'
const error = ref(null)

const logOut = async () => {
    error.vale = null
    try {
            await projectAuth.signOut()
    }catch(err){
            console.log(err.message)
            error.value = err.message
        }    
    }
const useLogOut = () => {
    return { logOut, error}
}

export default useLogOut