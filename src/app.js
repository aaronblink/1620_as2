const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
//query-selectors
const writeArea = document.querySelector(".write-note-area")
const notesArea = document.querySelector(".side=note-menu")

//text area to write to
const textArea = `
<textarea class="newNote" rows ="25" cols="55"></textarea>
`
//save button
const saveButton = `<button class='saveButton' type='button'>
  Save
  </button>`

//cancel button
const cancelButton = `<button class='cancelButton' type='button'>
Cancel
</button>`

function createNote(){
  writeArea.insertAdjacentHTML('afterend', cancelButton)
  writeArea.insertAdjacentHTML('afterend', saveButton)
  writeArea.insertAdjacentHTML('afterend', textArea)
  const cancelling = document.querySelector(".cancelButton")
  cancelling.addEventListener("click", cancelNote);
}

function cancelNote(){
  const cancelButton = document.querySelector(".cancelButton")
  const saveButton = document.querySelector(".saveButton")
  const textArea = document.querySelector(".newNote")
  cancelButton.remove()
  saveButton.remove()
  textArea.remove()
}

///create note taking area
const noteButton = document.querySelector(".fa-solid.fa-circle-plus")
noteButton.addEventListener("click", createNote);

///save a note

///display notes in a side nav

///read a note


