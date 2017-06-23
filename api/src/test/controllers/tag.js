var TagController = require("../../controllers/tag")
describe('#TagController', function() {
	describe(`TagObject`, function() {
		it('Refuses bad form color object')
		it('Refuses bad form name')
		it('Refuses object without tablename')
		it('Creates new tag if it doesn't exist')
		it('Creates tag pair using tablename')
	})
	describe(`UntagObject`, function() {
		it('Refuses missing tablename')
		it('Refuses nonexistent tag')
		it('Removes tag')
		it('Removes tag pair')
	})
	describe(`GetTags`, function() {
		it('Returns all tags belonging to an object')
		it('Returns tag objects')
	})
	describe(`StripTags`, function() {
		it('Ignores invalid object')
		it('Removes all pairings')
		it('Removes all tags')
	})
})
