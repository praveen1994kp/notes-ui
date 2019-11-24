import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import NoteDisplay from './NoteDisplay'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2)
    }
}))

export default function NotesDisplay({ notes }) {
    const classes = useStyles()

    return (
        <div className={classes.root} >
            <Grid container spacing={5}>
                {notes.sort((a, b) => b.lastMod - a.lastMod).map(note => (
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