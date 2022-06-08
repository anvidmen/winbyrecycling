export const validatedName = name => {
    const regex_name = /^[A-Za-z]+$/;
    let isValidate = regex_name.test(name)
    if (!isValidate) return false
    return isValidate
}

export const validatedEmail = email => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValidate = regex_email.test(email);
    if (!isValidate) return false
    return isValidate
}