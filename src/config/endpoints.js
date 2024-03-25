export const endpoints = (name) => {

    const SERVER = import.meta.env.VITE_SERVER
    console.log(SERVER, import.meta.env.VITE_APP_NAME)
    const endpoints = {
        //auth
        user_login: `${SERVER}/auth/sign_in`,
        //user info
        profile: `${SERVER}/profile`,
    }

    return endpoints[name]
}

export const headers = (name, data) => {

    const headers = {
        //auth
        user_login: {
            'App-Name': `${import.meta.env.VITE_APP_NAME}`
        },
        //user info
        profile: {
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