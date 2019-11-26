import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
    root: {
        width: '80%',
        margin: theme.spacing(5)
    },
    heading: {
        width: ' 100%'
    },
    contents: {
        width: '100%'
    }
}))

export default function Editor({ onSave }) {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [dirty, setDirty] = useState(false)

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
        setDirty(true)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
        setDirty(true)
    }

    const handleNoteSave = () => {
        if (dirty) {
            onSave({ title, content })
            clear()
        }
    }

    const clear = () => {
        setTitle('')
        setContent('')
        setDirty(false)
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1e-content'
                    id='panel1e-header'>
                    <TextField className={classes.heading} id='note-title' label='Title' variant='outlined'
                        onChange={handleTitleChange} value={title} />
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <TextField className={classes.contents} id='note-content' label='Contents' multiline
                        onChange={handleContentChange} value={content} />
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    {dirty &&
                        <React.Fragment>
                            <Button onClick={handleNoteSave} size='small'>Save</Button>
                            <Button onClick={clear} size='small'>Reset</Button>
                        </React.Fragment>
                    }
                </ExpansionPanelActions>
            </ExpansionPanel>
        </div>
    )
}