-- Get populated tasklists with tasks from a taskboard
SELECT tasklist.name, 
    tasklist_task.parent_task_id, 
    tasklist_task.is_complete, 
    tasklist_task.message 
FROM tasklist, 
    tasklist_task 
WHERE 
    tasklist.board_id = (select id from taskboard order by id asc limit 1);