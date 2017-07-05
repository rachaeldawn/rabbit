class BadFormError extends Error {
    constructor(msg: string) {
        super('Bad form: ' + msg)
    }
}

export function BadFormEmailError(email: string) {
    throw new BadFormError(`Email ${email} is not a valid email`)
}

export function BadFormUsernameError(username: string) {
    throw new BadFormError(`Username: ${username} is not a valid username`)
}

export function BadPasswordLength() {
    throw new BadFormError(`Password either too short or too long. 8 < password < 140.`)
}