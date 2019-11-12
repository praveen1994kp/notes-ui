import React from 'react'
import NoteDisplay from './NoteDisplay'

export const NOTES_LOCAL_STORAGE_ID = 'notes'

const Notes = ({ notes, addNote, updateNote, deleteNote }) => {

    const getNoteId = () => {
        return `N-${notes.length + 1}`
    }

    const handleNoteAdd = () => {
        addNote({ id: getNoteId(), title: 'Enter Title', content: 'Type Something...' })
    }

    const handleNoteUpdate = (id, title, content) => {
        updateNote(id, title, content)
    }

    const handleDelete = (id) => {
        deleteNote(id)
    }

    return (
        <div className="mt-5 col-8">
            {notes.sort((a, b) => b.lastMod - a.lastMod).map((note) => {
                return <NoteDisplay onChange={handleNoteUpdate} key={note.id} id={note.id}
                    onDelete={handleDelete} content={note.content} title={note.title} lastMod={note.lastMod} />
            })}
            <button className="btn btn-light m-2" onClick={handleNoteAdd}><h4>Add Note</h4></button>
        </div>
    )
}

export default Notes