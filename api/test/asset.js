var Assets = require("../src/asset")
describe('#Assets', function() {
	describe('Create', function() {
		it('rejects request with missing required parameters')
		it('rejects duplicate name')
		it('rejects invalid parameter forms')
		it('creates new asset')
		it('creates tags')
	})
	describe('Update', function() {
		it('rejects when all params undefined')
		it('ignores updating no-change parameters')
		it('updates asset')
		it('updates tags')
	})
	describe('Search', function() {
		it('rejects empty search object')
		it('logs invalid fields in search object')
		it('rejects no valid fields in search object')
		it('searches partials appropriately')
		it('searches exacts appropriately')
		it('supports multiple-field search')
		it('refines search using all fields (filtering locally)')
		it('rejects invalid search object form')
	})
	describe('List', function() {
		it('max list 100')
		it('returns array of Asset objects')
		it('ascending functions as intended')
	})
	describe('Page', function() {
		it('skips proper amount')
		it('returns expected quantity')
		it('tags are attached')
	})
	describe('Tag', function() {
		it('ignores already-existing tags')
		it('adds tag')
		it('updates object')
	})
	describe('Untag', function() {
		it('ignores non-existent tags')
		it('removes tags')
		it('updates object')
	})
	describe('Privacy', function() {
	})
})
