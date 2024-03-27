import { endpoints, headers } from "../../../../config/endpoints"
import axios from "axios"

export const postTransaction = async(transferData, setTransferData, setShowAlert, setAlertNessage, context) => {
    try {
        const data = {
          currency_sent: transferData.currency_sent,
          currency_received: transferData.currency_received,
          amount_sent: parseFloat(transferData.amount_sent)
        }
        await axios.post(endpoints('exchange'), data, headers('general', context))
        setShowAlert(true)
        setAlertNessage('Success')
        setTransferData({
          currency_sent: 'usd',
          currency_received: '',
          amount_sent: '',
          email: '',
          description: ''
        })
      } catch (error) {
        console.log(error)
        setShowAlert(true)
        setAlertNessage('Error')
      }
}