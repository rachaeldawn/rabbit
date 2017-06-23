export function BadFormEmailError(email: string) {
    throw new Error(`Email ${email} is not a valid email`)
}

export function BadFormUsernameError(username: string) {
    throw new Error(`Username: ${username} is not a valid username`)
}

export function BadPasswordLength() {
    throw new Error(`Password either too short or too long. 8 < password < 140.`)
}