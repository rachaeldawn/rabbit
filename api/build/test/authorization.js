var AuthorizationController = require("../controllers/authorization");
describe('#AuthorizationController', function () {
    describe("Authorize", function () {
        it("Generates a new hex transient token on validation");
        it("Authorizes both the persistent and transient tokens");
        it("Rejects request entirely when the transient token does not exist");
    });
    describe("Login", function () {
        it("Refuses missing CSRF token");
        it("Refuses request when the CSRF is invalid");
        it("Rejects missing username or password");
        it("Rejects usernames with invalid characters");
        it("Tosses the persistent and transient session tokens into the response object when successful");
    });
    describe("Logout", function () {
        it("Removes transient token from cache");
        it("Removes persistent token from cache");
        it("Rejects if the persistent and transient tokens do not exist");
    });
    describe("GenerateToken", function () {
        it("Generates a random 128 character token (run 100,000 times, and check if there are any repeats)");
    });
    describe("CachePersistentToken", function () {
        it("Ignores invalid users");
        it("Saves token");
    });
    describe("CacheTransientToken", function () {
        it("Undefined if the persistent token does not exist");
        it("Caches the transient token");
    });
    describe("CacheCSRFToken", function () {
        it("Caches the token");
    });
    describe("ValidateAuthTokens", function () {
        it("Rejects if the transient does not match the persistent");
        it("Rejects if any parameters are missing");
    });
    describe("ValidateCSRFToken", function () {
        it("Rejects if the IP does not match");
        it("Rejects if the token does not match");
        it("Resolves to true if it worked");
    });
});
