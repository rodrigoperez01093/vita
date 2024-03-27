export const endpoints = (name) => {

    const SERVER = import.meta.env.VITE_SERVER

    const endpoints = {
        user_login: `${SERVER}/auth/sign_in`,
        profile: `${SERVER}/profile`,
        transactions: `${SERVER}/transactions`,
        prices: `${SERVER}/users/get_crypto_multi_prices`,
        exchange: `${SERVER}/transactions/exchange`,
    }

    return endpoints[name]
}

export const headers = (name, data) => {

    const headers = {
        user_login: {
            'App-Name': `${import.meta.env.VITE_APP_NAME}`
        },
        general: {
            'App-Name': `${import.meta.env.VITE_APP_NAME}`,
            'Access-token': data?.token,
            'Expiry': data?.expiry,
            'Client': data?.client,
            'Uid': data?.uid
        }
    }

    return {
        headers: headers[name]
    }
}