export const endpoints = (name) => {

    const SERVER = import.meta.env.VITE_SERVER
    console.log(SERVER, import.meta.env.VITE_APP_NAME)
    const endpoints = {
        //auth
        user_login: `${SERVER}/auth/sign_in`,
    }

    return endpoints[name]
}

export const headersSigIn = () => {
    return {
        headers: {
            'App-Name': `${import.meta.env.VITE_APP_NAME}` 
        }
    }
}