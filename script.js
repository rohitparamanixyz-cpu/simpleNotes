import { notesData } from "./data.js"

const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click', addNotes)

function addNotes() {
    let noteTitleAreaValue = document.getElementById('note-title-area').value
    let noteTextAreaValue = document.getElementById('note-text-area').value

    if(noteTextAreaValue === '' && noteTitleAreaValue === '') {
        alert('Nothing to save...')
    } else {
       let noteObj = {
            title: `${noteTitleAreaValue}`,
            text: `${noteTextAreaValue}`
        }

        notesData.push(noteObj)
    }

    document.getElementById('note-title-area').value = ''
    document.getElementById('note-text-area').value = ''

    renderNotes()

}

function renderNotes() {
    let savedNotes = document.getElementById('saved-notes')

    let savedNotesHtml = ``

    notesData.forEach(element => {
        savedNotesHtml += `
        <div class="note">
            <div class="note-content">
               <h2>${element.title}</h2>
               <p>${element.text}</p>
            </div>
            <button id="delete-note-btn" class="delete-note-btn>Delete</button>
        </div>
        `
    });

    savedNotes.innerHTML = savedNotesHtml
}