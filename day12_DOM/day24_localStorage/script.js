let notes = JSON.parse(localStorage.getItem("notes")) || [];

function showNotes() {
  const notesContainer = document.getElementById("notesContainer");
  notesContainer.innerHTML = "";

  notes.forEach((note, index) => {
    notesContainer.innerHTML += `
      <div class="note">
        <p>${note}</p>
        <button onclick="editNote(${index})">Edit</button>
        <button onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const note = noteInput.value.trim();

  if (note === "") {
    alert("Please enter a note!");
    return;
  }

  notes.push(note);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  showNotes();
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  showNotes();
}

function editNote(index) {
  const newNote = prompt("Edit your note:", notes[index]);
  if (newNote !== null && newNote.trim() !== "") {
    notes[index] = newNote.trim();
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
  }
}

showNotes();