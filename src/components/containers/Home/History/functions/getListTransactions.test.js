import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { describe, it, vi, expect } from "vitest";
import { endpoints } from '../../../../../config/endpoints';
import { getListTransactions } from './getListTransactions'
import transactions from './transactions.json'

describe('getListTransactions request', () => { 
    it('Brings history data succesfully', async() => {
        const mockedTransactions = new MockAdapter(axios)
        const response = { data: transactions }
        const context = {}
        mockedTransactions.onGet(endpoints('transactions')).reply(200, response)

        const setTransactions = vi.fn()
        const setLoading = vi.fn()

        await getListTransactions(setTransactions, context, setLoading)

        expect(setTransactions).toHaveBeenCalledWith([
            {
              amount: '0.99',
              currency: 'usdt',
              created: '2024-03-27T00:53:06.810Z',
              transactionType: null,
              type: 'transaction',
            },
        ]);

        expect(setLoading).toHaveBeenCalledWith(false)
    })
 })