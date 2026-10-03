var addButton = document.getElementById("addButton");
var clearButton = document.getElementById("clearButton");

addButton.onclick = function() {

    var task = document.getElementById("taskInput").value;
    var date = document.getElementById("taskInput2").value;

    if (task == "") {
        alert("Please enter a task.");
        return;
    }

    if (date == "") {
        alert("Please select a date.");
        return;
    }

    var list = document.getElementById("taskList");

    var item = document.createElement("li");

    item.innerHTML = task + " - " + date;

    item.onclick = function() {
        item.classList.toggle("completed");
    };

    var deleteButton = document.createElement("button");

    deleteButton.innerHTML = "Delete";

    deleteButton.onclick = function(event) {
        event.stopPropagation();
        item.remove();
    };

    item.appendChild(deleteButton);

    list.appendChild(item);

    document.getElementById("taskInput").value = "";
    document.getElementById("taskInput2").value = "";
};


clearButton.onclick = function() {
    document.getElementById("taskList").innerHTML = "";
};
