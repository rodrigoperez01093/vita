export const validateField = (name, value) => {
    let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (name === 'email' && cond_email.test(value) === true) return true
}