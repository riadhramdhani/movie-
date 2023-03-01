import { GET_DATA} from "../actiontype/actiontype";
import axios from "axios"


export const  get_data=()=>async(dispatch)=>{
try {
    const res= await axios.get("http://192.168.2.47:3333/api/getallpost")

    dispatch({type:GET_DATA, payload:res.data})
    
} catch (error) {
    console.log(error)
}
}