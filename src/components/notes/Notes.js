import React from 'react'
import NoteDisplay from './NoteDisplay'

const Notes = ({ notes, addNote, updateNote }) => {

    const getNoteId = () => {
        return `N-${notes.length + 1}`
    }

    const handleNoteAdd = () => {
        addNote({ id: getNoteId(), title: 'Enter Title', content: 'Type Something...' })
    }

    const handleNoteUpdate = (id, title, content) => {
        updateNote(id, title, content)
    }

    return (
        <div className="mt-5 col-6">
            {notes.sort((a, b) => b.lastMod - a.lastMod).map((note) => {
                return <NoteDisplay onChange={handleNoteUpdate} key={note.id} id={note.id} content={note.content} title={note.title} lastMod={note.lastMod} />
            })}
            <button className="btn btn-light m-2" onClick={handleNoteAdd}><h4>Add Note</h4></button>
        </div>
    )
}

export default Notes