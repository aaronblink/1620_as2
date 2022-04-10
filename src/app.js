const notes = [
  { 
    title: "first note", 
    noteBody: "this is an example note",
    id: 1 
  }
]
const writeArea = document.querySelector(".write-note-area")
const textArea = `
<textarea class="newNote" rows ="25" cols="55"></textarea>
`
const saveButton = `<button class='saveButton' type='button'>
  Save
  </button>`
const cancelButton = `<button class='cancelButton' type='button'>
Cancel
</button>`

function createNote(){
  writeArea.insertAdjacentHTML('afterend', cancelButton)
  writeArea.insertAdjacentHTML('afterend', saveButton)
  writeArea.insertAdjacentHTML('afterend', textArea)
}


///create note taking area
const noteButton = document.querySelector(".fa-solid.fa-circle-plus")

noteButton.addEventListener("click", createNote);

//text area to write to

//save button

//cancel button


///save a note

///display notes in a side nav

///read a note


