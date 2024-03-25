import { endpoints, headers } from "../../../../config/endpoints"
import axios from "axios"

export const getUsserInfo = async(setUserInfo, context) => {
    try {
        const data = (await axios.get(endpoints('profile'), headers('general', context))).data
        if(data.data){
            setUserInfo(data.data.attributes)
        }
    } catch (error) {
        console.log(error)
    }
}