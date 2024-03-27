export const validateLogin = (userData, setIsFormComplete) => {
    let cond_email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let cond_pass = /^[a-zA-Z0-9._-]{8,20}$/;
   const { email, password } = userData;
    const checkEmail = cond_email.test(email);
    const checkPassword = cond_pass.test(password);
    setIsFormComplete(checkEmail && checkPassword);
  }