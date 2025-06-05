import useAxios from "axios-hooks";
import { userPostDTO } from "../types/userType";


export default function useUserPost(){
    const [{ loading, error, data }, executePost] = useAxios(
      {
        url: 'http://localhost:3000/posts',
        method: 'POST',
      },
      {
        manual: true,
      },
    )

    const createPost = async(userData: userPostDTO)=> {
        try {
            const response = await executePost({ data: userData });
            return response;
        } catch {
            throw new Error('Failed to create post');
        }
    }
    return { loading, error, data, createPost };
}