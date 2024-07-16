$(document).ready(function () {
    var taskForm = $("#task-form");
    var tasklist = $("#task-list");

    taskForm.submit(function (event) {
        event.preventDefault();

        var taskName = $("#task").val().trim();

        if (taskName !== "") {
            tasklist.append("<li>" + taskName + "</li>");
            $("#task").val(""); 
        }
    });

    tasklist.on("click", "li", function () {
        $(this).toggleClass("completed"); 
    });
});
