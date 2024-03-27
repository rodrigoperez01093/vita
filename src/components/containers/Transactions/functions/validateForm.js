export const validateForm = (transferData, setIsFormComplete) => {
    let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

    const { amount_sent, email, description, currency_received } = transferData;
    const checkAmount = amount_sent.trim() !== '' && !isNaN(amount_sent);
    const checkEmail = cond_email.test(email);
    const checkDescription = description.trim() !== '';
    const checkCurrency = currency_received.trim() !== '';
    setIsFormComplete(checkAmount && checkEmail && checkDescription && checkCurrency);
}