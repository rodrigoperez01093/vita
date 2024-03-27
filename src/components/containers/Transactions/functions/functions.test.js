import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { describe, it, vi, expect } from "vitest";
import { getPrices } from "./getPrices";
import { postTransaction } from "./postTransaction";
import { endpoints } from '../../../../config/endpoints';
import prices from "./prices.json";

describe('getPrices request', () => { 
    it('Brings prices succesfully', async() => {
        const mockedPrices = new MockAdapter(axios)
        const response = { prices: prices }
        mockedPrices.onGet(endpoints('prices')).reply(200, response)

        const setPrices = vi.fn()
        const context = {}

        await getPrices(setPrices, context)

        expect(setPrices).toHaveBeenCalledWith(response.prices)
    })
 })

describe('postTransaction request', () => { 
    it('Should make an exchange successfully', async() => {
        const mockedPostTransaction = new MockAdapter(axios)

        mockedPostTransaction.onPost(endpoints('exchange')).reply(200)

        const setAlertNessage = vi.fn()
        const setShowAlert = vi.fn()
        const setTransferData = vi.fn()

        await postTransaction({}, setTransferData, setShowAlert, setAlertNessage)

        expect(setShowAlert).toHaveBeenCalledWith(true)
        expect(setAlertNessage).toHaveBeenCalledWith('Success')
        expect(setTransferData).toHaveBeenCalledWith({
            currency_sent: 'usd',
            currency_received: '',
            amount_sent: '',
            email: '',
            description: ''
        })
    })
})