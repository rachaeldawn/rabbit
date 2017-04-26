class Asset {
    constructor(name, description, purchase_value, serial = null) {
        this.id = -1
        this.name = name
        this.description = description
        this.purchase_value = purchase_value
        this.serial = serial
    }
}

const supportsTagging = true

module.exports = Asset
module.exports.supportsTagging = supportsTagging