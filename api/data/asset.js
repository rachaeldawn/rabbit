class Asset {
    constructor(name, description, purchase_value, serial = null) {
        this.name = name
        this.description = description
        this.purchase_value = purchase_value
        this.serial = serial
    }
}

const supportsTagging = true
const tableName = 'asset'

module.exports = Asset
module.exports.supportsTagging = supportsTagging
module.exports.tableName = tableName