import { notesData } from "./data.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const savedData = JSON.parse(localStorage.getItem('notesData'))

if (savedData) {
    notesData.length = 0
    notesData.push(...savedData)
}

renderNotes()

function saveData() {
    localStorage.setItem('notesData', JSON.stringify(notesData))
}

const saveBtn = document.getElementById('save-btn')

saveBtn.addEventListener('click', addNotes)

document.addEventListener('click', function(e) {
    if(e.target.dataset.delete) {
        deleteNote(e.target.dataset.delete)
    }
})

function addNotes() {
    let noteTitleAreaValue = document.getElementById('note-title-area').value
    let noteTextAreaValue = document.getElementById('note-text-area').value

    if(noteTextAreaValue === '' && noteTitleAreaValue === '') {
        alert('Nothing to save...')
    } else {
       let noteObj = {
            title: `${noteTitleAreaValue}`,
            text: `${noteTextAreaValue}`,
            uuid: uuidv4()
        }

        notesData.push(noteObj)
    }

    document.getElementById('note-title-area').value = ''
    document.getElementById('note-text-area').value = ''

    renderNotes()
    saveData()
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
            <div class="note-icons">
                <i class="fa-solid fa-trash" data-delete="${element.uuid}"></i>
            </div>
        </div>
        `
    });

    savedNotes.innerHTML = savedNotesHtml
}

function deleteNote(noteId) {
    const index = notesData.findIndex(function(note) {
        return note.uuid === noteId
    })

    if (index !== -1) {
        notesData.splice(index, 1)
    }

    renderNotes()
    saveData()
}