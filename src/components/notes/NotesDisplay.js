import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import NoteDisplay from './NoteDisplay'
import Editor from './Editor'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    }
}))

export default function NotesDisplay({ notes, addNote, deleteNote, updateNote, search }) {
    const classes = useStyles()

    const [_notes, setNotes] = useState(notes)

    useEffect(() => {
        const filtered = notes.filter(note => note.title.includes(search) || note.content.includes(search))
        setNotes(filtered)
        console.log(filtered)
    }, [search, notes])

    const getNoteId = () => {
        return `N-${notes.length + 1}`
    }

    const handleNoteAdd = ({ id, title, content }) => {
        addNote({ id: getNoteId(), title, content })
        syncState()
    }

    const handleNoteDelete = (id) => {
        deleteNote(id)
        syncState()
    }

    const syncState = () => {
        setNotes(notes)
    }

    const handleNoteUpdate = (id, title, content) => {
        updateNote(id, title, content)
        syncState()
    }

    return (
        <div className={classes.root} >
            <Editor onSave={handleNoteAdd} />
            <Grid container spacing={5}>
                {_notes.sort((a, b) => new Date(b.lastMod) - new Date(a.lastMod)).map(note => (
                    <Grid key={note.id} item>
                        <NoteDisplay
                            id={note.id}
                            content={note.content}
                            title={note.title} lastMod={note.lastMod}
                            onDelete={handleNoteDelete}
                            onUpdate={handleNoteUpdate}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}