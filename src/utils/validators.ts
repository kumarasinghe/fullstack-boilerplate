export const NameValidator = /^[A-Za-z ]+$/;

export const EmailValidator = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const PasswordValidator =
    /^(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z])(?=\D*\d)(?=[^!#%]*[!#%])[A-Za-z0-9!#%]{8,32}$/;
