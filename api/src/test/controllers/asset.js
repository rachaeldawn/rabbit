var AssetController = require("../../controllers/asset")
describe('#AssetController', function() {
	describe(`CreateAsset`, function() {
		it('Undefined if User does not exist')
		it('Refuse if user does not have write permission on Assets')
		it('Refuse missing required fields')
		it('Creates new asset')
	})
	describe(`GetAsset`, function() {
		it('Undefined if user or asset does not exist')
		it('Refuses if user does not have read permission on Asset')
		it('Returns asset')
	})
	describe(`ListAsset`, function() {
		it('Undefined if user does not exist')
		it('Caps out at 100')
		it('Returns list of assets')
	})
	describe(`PageAsset`, function() {
		it('Undefined if user does not exist')
		it('Caps out at 100')
		it('Returns list of assets')
	})
	describe(`UpdateAsset`, function() {
		it('Undefined if user or asset does not exist')
		it('Refuses bad form update object (no valid fields)')
		it('Refuses if user does not have read permission on asset')
		it('Refuses if user does not have write permission on asset')
		it('Updates all fields')
	})
	describe(`SetAssetArchived`, function() {
		it('Undefined if user or asset does not exist')
		it('Refuses if user does not have read permission on assets')
		it('Refuses if user does not have write permission on assets')
		it('Sets archived to status')
	})
	describe(`ArchiveAsset`, function() {
		it('Undefined if user or asset does not exist')
		it('Refuses if user does not have read permission on assets')
		it('Refuses if user does not have write permission on assets')
		it('Sets archived to true')
	})
	describe(`UnarchiveAsset`, function() {
		it('Undefined if user or asset does not exist')
		it('Refuses if user does not have read permission on assets')
		it('Refuses if user does not have write permission on assets')
		it('Sets archived to false')
	})
})
