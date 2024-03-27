import { endpoints, headers } from "../../../../config/endpoints"
import axios from "axios"

export const getPrices = async(setPrices, context) => {
    try {
        const data = (await axios.get(endpoints('prices'), headers('general', context))).data
        setPrices(data.prices)
    } catch (error) {
        console.log(error)
    }
}