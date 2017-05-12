var str = `this is a ' string ' that is " escaped " ) for ( sql _ injection`

str = str.replace(/\d/, /\\d/).replace('this', `'this'`)
console.log(`this is a ' string ' that is " escaped " ) for ( sql _ injection`)