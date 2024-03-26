
import { endpoints, headers } from "../../../../../config/endpoints"
import axios from "axios"

export const getListTransactions = async(setTransactions, context, setLoading) => {
    setLoading(true)
    try {
        const data = (await axios.get(endpoints('transactions'), headers('general', context))).data
        console.log(data.data)
        if(data.data){
            const OrderedData = data.data.map((d,i) => {
                return {
                    amount: d.attributes.amount,
                    currency: d.attributes.currency,
                    created: d.attributes.created_at,
                    transactionType: d.attributes.total_in_exchange_currency,
                    type: d.type
                }
            })
            setTransactions(OrderedData)
            setLoading(false)
        }
    } catch (error) {
        console.log(error)
        setLoading(false)
    }
}