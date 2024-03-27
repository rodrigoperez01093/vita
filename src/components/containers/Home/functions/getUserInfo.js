import { endpoints, headers } from "../../../../config/endpoints"
import axios from "axios"

export const getUsserInfo = async(setUserInfo, context, setLoading) => {
    setLoading(true)
    try {
        const data = (await axios.get(endpoints('profile'), headers('general', context))).data
        if(data.data){
            setUserInfo(data.data.attributes)
        }
        setLoading(false)
    } catch (error) {
        console.log(error)
    }
}