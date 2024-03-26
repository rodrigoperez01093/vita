export const validateField = (name, value) => {
    let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let cond_description = /^[aA-zZ]{2,20}$/;
    if (name === 'email' && cond_email.test(value)) return true
    if (name === 'description' && cond_description.test(value)) return true
    if (name === 'description' && cond_description.test(value)) return true
    if (name === 'amount_sent' && value > 0) return true
}