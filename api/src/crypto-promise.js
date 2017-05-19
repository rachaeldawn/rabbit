import * as crypto from "crypto"
import { StringDecoder } from "string_decoder"
import * as Promise from "bluebird"

export var pbkdf2 = (str, salt, iterations, keylen, digest) => new Promise(function(resolve, reject) {
    crypto.pbkdf2(str, salt, iterations, keylen, digest, (err, key) => {
        err && reject(err)
        resolve(key)
    })
})

let GetHashed = async () => (await pbkdf2("Do the password thing", crypto.randomBytes(200), 140000, 512, 'sha256')).toString('hex')


GetHashed()
    .then(res => console.log(res))