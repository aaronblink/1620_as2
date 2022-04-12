const notes = [
  // { 
  //   title: "Title", 
  //   noteBody: "Test",
  //   id: 1 
  // }
]
//query-selectors
const writeArea = document.querySelector(".create-note-area")
const notesArea = document.querySelector(".notes-list")
const readArea = document.querySelector('.read-note-area')

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

const closeButton = `<button class='closeButton' type='button'> 
Close
</button>`

const textAreaButtons = `<div>${saveButton} ${cancelButton}</div>`

function createNote(){
  writeArea.insertAdjacentHTML('afterend', textAreaButtons)
  writeArea.insertAdjacentHTML('afterend', textArea)

  const cancelling = document.querySelector(".cancelButton")
  cancelling.addEventListener("click", cancelNote)
  const saveBtn = document.querySelector(".saveButton")
  saveBtn.addEventListener("click", saveNote)
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

///display notes in a side nav
function saveNote(){
  const textArea = document.querySelector(".newNote")
  const addedText = textArea.value.split("\n")
  const Title = addedText[0]
  const Body = addedText.slice(1)
  notes.push({title: Title, noteBody: Body, id:notes.length + 1})
  const Titles = `<li class="${notes[notes.length - 1].id}">${Title}</li>`
  notesArea.insertAdjacentHTML('beforeend', Titles)
  cancelNote()
}

function closeDisplayNote() {
  readArea.remove()
  const closeButton = document.querySelector('.closeButton')
  closeButton.remove()
}

///read a note
notesArea.addEventListener("click", (evt) => {
  if (evt.target.className == notes[notes.length - 1].id) {
    readArea.insertAdjacentHTML('beforeend', `<h1>${notes[notes.length - 1].title}</h1>`)
    readArea.insertAdjacentHTML('afterend', closeButton)
    const closingBtn = document.querySelector(".closeButton")
    closingBtn.addEventListener("click", closeDisplayNote)
    console.log(closingBtn)
    for (const element of notes[notes.length -1].noteBody) {
      if (element == ''){  
      readArea.insertAdjacentHTML('beforeend', '<br>')
      } else {readArea.insertAdjacentHTML('beforeend', `<p>${element}</p>`)
               readArea.insertAdjacentHTML('beforeend', '<br>')  
    }}
  } 
})


///Bonus
function toggleTheme() {
  const theme = document.querySelector(".main-container")
  const btnState = document.querySelector(".theme-toggle")
  btnState.addEventListener("click", (evt) => {
    if (evt.target.checked == true){
      theme.classList.add("dark-theme")
    } else {
      theme.classList.remove("dark-theme")
    }
  })
}
toggleTheme()


///read a note

//button class is dark-mode-toggle

//css .darkmode


