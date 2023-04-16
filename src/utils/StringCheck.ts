export const isValidEmailString = (email:string):boolean => email.includes("@")
export const isValidPWString = (password:string):boolean => (password.length >= 8)