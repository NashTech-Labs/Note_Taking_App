document.addEventListener("DOMContentLoaded", function() {
    const noteInput = document.getElementById("note-input");
    const addNoteButton = document.getElementById("add-note");
    const noteList = document.getElementById("note-list");

    addNoteButton.addEventListener("click", function() {
        const noteText = noteInput.value.trim();

        if (noteText !== "") {
            const listItem = document.createElement("li");
            listItem.textContent = noteText;
            noteList.appendChild(listItem);
            noteInput.value = "";
        }
    });

    noteInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addNoteButton.click();
        }
    });
});
