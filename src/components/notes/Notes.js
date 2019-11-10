import React from 'react'
import NoteDisplay from './NoteDisplay'

const Notes = ({ notes, addNote, updateNote }) => {

    const handleNoteAdd = () => {
        addNote({ title: 'Enter Title', content: 'Type Something...' })
    }

    const handleNoteUpdate = (id, title, content) => {
        updateNote(id, title, content)
    }

    return (
        <div className="mt-5 col-6">
            {notes.map((note, index) => {
                return <NoteDisplay onChange={handleNoteUpdate} key={index} id={index} content={note.content} title={note.title} lastMod={note.lastMod} />
            })}
            <h4 onClick={handleNoteAdd}>Add Note</h4>
        </div>
    )
}

export default Notes