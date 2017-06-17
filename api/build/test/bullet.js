var BulletController = require("../controllers/bullet");
describe('#BulletController', function () {
    describe("CreateBullet", function () {
        it("Undefined if user does not exist");
        it("Undefined if msg is under 5 characters");
        it("Refuses if user is not an employee");
        it("Creates a new bullet");
    });
    describe("UpdateBullet", function () {
        it("Undefined if user does not exist");
        it("Undefined if new message is under 5 characters");
        it("Refuses if user is not an employee");
        it("Refuses if user did not originally create the bullet");
    });
    describe("GetBullet", function () {
        it("Undefined if bullet or user does not exist");
        it("Refuses if user is not an employee");
        it("Returns bullet object");
        it("Returns bullet object with comments if populated true");
    });
    describe("ListBullets", function () {
        it("Undefined if user does not exist");
        it("Refuses if user is not an employee");
        it("Caps out at 100");
        it("Returns a list of bullets");
        it("Returns a list of populated bullets if populated true");
    });
    describe("PageBullets", function () {
        it("Undefined if user does not exist");
        it("Refuses if user is not an employee");
        it("Caps out at 100");
        it("Returns a page of bullets");
        it("Returns a page of populated bullets if populated true");
    });
    describe("DeleteBullet", function () {
        it("Undefined if user or bullet does not exist");
        it("Refuses if user does did not create the bullet");
        it("Refuses if user is not an employee");
        it("Deletes the bullet (DB deletes comments automatically)");
    });
    describe("CreateComment", function () {
        it("Undefined if user or bullet does not exist");
        it("Refuses if user is not an employee");
        it("Posts a new comment");
    });
    describe("UpdateComment", function () {
        it("Undefined if comment or user does not exist");
        it("Refuses if user did not originally post comment");
        it("Updates the comment");
    });
    describe("ListComments", function () {
        it("Undefined if user does not exist");
        it("Undefined if bullet is specified, and bullet does not exist");
        it("Refuses if user is not an employee");
        it("Returns a list of comments");
        it("Caps out at 100");
    });
    describe("PageComments", function () {
        it("Undefined if user does not exist");
        it("Undefined if bullet is specified, and bullet does not exist");
        it("Refuses if user is not an employee");
        it("Returns a page of comments");
        it("Caps out at 100");
    });
    describe("ListCommentsByUser", function () {
        it("Undefined if target or user does not exist");
        it("Refuses if user is not an employee");
        it("Returns amt of comments");
        it("Caps out at max 100");
    });
    describe("PageCommentsByUser", function () {
        it("Undefined if target or user does not exist");
        it("Refuses if user is not an employee");
        it("Gets a page of comments");
        it("Caps out at max 100");
    });
    describe("ListBulletsByUser", function () {
        it("Undefined if target or user does not exist");
        it("Refuses if user is not an employee");
        it("Returns list of bullets");
        it("Caps out at 100");
    });
    describe("PageBulletsByUser", function () {
        it("Undefined if target or user does not exist");
        it("Refuses if user is not an employee");
        it("Returns page of bullets");
        it("Caps out at 100");
    });
});
