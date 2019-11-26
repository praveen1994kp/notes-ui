import React from 'react'
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

export default function NotesDisplay({ notes, addNote }) {
    const classes = useStyles()

    const getNoteId = () => {
        return `N-${notes.length + 1}`
    }

    const handleNoteAdd = ({ id, title, content }) => {
        addNote({ id: getNoteId(), title, content })
    }

    return (
        <div className={classes.root} >
            <Editor onSave={handleNoteAdd} />
            <Grid container spacing={5}>
                {notes.sort((a, b) => new Date(b.lastMod) - new Date(a.lastMod)).map(note => (
                    <Grid key={note.id} item>
                        <NoteDisplay
                            id={note.id}
                            content={note.content}
                            title={note.title} lastMod={note.lastMod}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}