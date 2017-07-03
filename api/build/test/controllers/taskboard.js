var TaskboardController = require("../../controllers/taskboard");
describe('#TaskboardController', function () {
    describe("CreateTaskboard", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user is not an employee');
        it('Creates the taskboard');
    });
    describe("DeleteTaskboard", function () {
        it('Refuses if user does not own taskboard');
        it('Deletes taskboard');
        it('Removes all participants');
    });
    describe("GetTaskboard", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have permission to view tasks');
        it('Undefined if the taskboard does not exist');
        it('Organizes the retrieved data');
        it('Returns a populated taskboard');
    });
    describe("AddTasklist", function () {
        it('Refuses if the user is not part of the board');
        it('Refuses if the name is too long');
        it('Undefined if user does not exist');
        it('Creates the tasklist');
        it('Creates the tasklist in the taskboard');
    });
    describe("DeleteTasklist", function () {
        it('Refuses if user does not have permission to remove the list');
        it('Refuses if the user is not part of the board');
        it('Undefined if the tasklist does not exist');
        it('Undefined if user does not exist');
        it('Removes the tasklist');
    });
    describe("MoveTaskList", function () {
        it('Refuses if the user does not have write permissions in either board');
        it('Refuses if the user does not have read permissions from the original board');
        it('Undefined if user does not exist');
        it('Undefined if the new board does not exist');
        it('Moves the tasklist');
    });
    describe("ChangeTasklistName", function () {
        it('Undefined if the tasklist does not exist');
        it('Undefined if user does not exist');
        it('Refuses if the name is already the new name');
        it('Updates the name');
    });
    describe("GetPopulatedTasklist", function () {
        it('Undefined if the tasklist does not exist');
        it('Undefined if user does not exist');
        it('Refuses if the user is not allowed to see the tasklist');
        it('Gets a tasklist with a .tasks populated');
    });
    describe("CreateTask", function () {
        it('Refuses if the user does not have permission to add the task');
        it('Undefined if user does not exist');
        it('Undefined if the tasklist does not exist');
        it('Creates the task');
    });
    describe("SetTaskStatus", function () {
        it('Refuses if the user does not have permission to set the task status');
        it('Undefined if user does not exist');
        it('Undefined if the task does not exist');
        it('Sets a single task status');
        it('Sets all children task statuses');
    });
    describe("GetTasks", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have permission to view tasks');
        it('Undefined if the tasklist does not exist');
        it('Refuses if the tasklist passed in is unset');
        it('Returns tasks to only the tasklist');
        it('Performs as advertised');
    });
    describe("SetTaskText", function () {
        it('Refuses if the user does not have read permissions');
        it('Refuses if the user does not have write permissions');
        it('Undefined if user does not exist');
        it('Undefined if the task does not exist');
        it('Performs as advertised');
    });
    describe("DeleteTask", function () {
        it('Refuses if user does not have delete permissions');
        it('Refuses if user does not have read permissions');
        it('Undefined if user does not exist');
        it('Undefined if task does not exist');
        it('Deletes the task');
    });
    describe("SetTaskParent", function () {
        it('Refuses if the user does not have write permissions');
        it('Refuses if the user does not have read permissions');
        it('Undefined if user does not exist');
        it('Removes parent if parent is undefined or null');
        it('Sets parent to the new parent if defined');
    });
});
