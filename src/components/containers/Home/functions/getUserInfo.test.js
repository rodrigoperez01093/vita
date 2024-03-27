import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { describe, it, vi, expect } from "vitest";
import { getUserInfo } from "./getUserInfo"
import { endpoints } from '../../../../config/endpoints';
import profile from "./profile.json"

describe('getUserInfo request', () => { 
    it('Should get the profile user info', async() => {
        const mockedUserInfo = new MockAdapter(axios)
        const response = { data: profile }
        mockedUserInfo.onGet(endpoints('profile')).reply(200, response)

        const setUserInfo = vi.fn()
        const setLoading = vi.fn()

        await getUserInfo(setUserInfo, {}, setLoading)

        expect(setUserInfo).toHaveBeenCalledWith(response.data.attributes)
        expect(setLoading).toHaveBeenCalledTimes(2)
        expect(setLoading).toHaveBeenCalledWith(false)
    })
 })