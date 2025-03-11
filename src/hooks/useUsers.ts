import useAxios from "axios-hooks";
import { userDTO } from "../types/userType";

 export default function useUsers(){
    const [{loading,error,data},executePost] = useAxios(
        {
        url: 'http://localhost:3000/users',
        method: 'POST'
        },
        {
            manual: true
        }
    )
    const postUser = async(userData:userDTO) => {
        try{
            const response = await executePost({data: userData})
            return response
        } catch(error){
            console.log(error)
            throw new Error('Failed to post data')
        }
    }

    return { loading, error, data, postUser }
}