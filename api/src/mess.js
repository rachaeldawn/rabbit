var stripe = require('stripe')('sk_test_GdFK6fCLyTQVHmmIA5MH2JLh')
var assert = require('assert')
var _ = require('lodash')
async function getToken() {
    return await stripe.tokens.create({
        card: {
            "number": '4242424242424242',
            "exp_month": 12,
            "exp_year": 2018,
            "cvc": '123'
        }
    })
}

async function doThing(tokenOrId) {
    var tokenId = (_.isNumber(tokenOrId)) ? tokenOrId : tokenOrId.id
    try {
        var TokenCheck = await stripe.tokens.retrieve(tokenId)
    } catch (err) {
        InvalidTokenError(err)
    }
    try {
        var isValid = (await stripe.tokens.retrieve(tokenId)).used == false || InvalidTokenError()
        var charge = await stripe.charges.create({
            amount: 1000,
            capture: true,
            currency: "cad",
            source: tokenId,
            description: "A test"
        })
        console.log(`Charge amount: ${charge.id}, ${charge.amount / 100}`)
        var refund = await stripe.refunds.create({
            amount: 500,
            charge: charge.id,
            reason: "requested_by_customer",
            
        })
        assert.doesNotThrow(async function() {
            var RefundCheck = await stripe.refunds.retrieve(refund.id)
            console.log(RefundCheck)
        }, 'This should not have had a problem.')

        console.log(`Refund amount: ${refund.id}, ${refund.amount / 100}`)
    } catch (err) {
        throw err
    }
}

const InvalidTokenError = (err) => { throw new Error('Token ID provided is invalid.\n' + err) }

getToken()
    .then(doThing)
    .catch(err => console.error(err))