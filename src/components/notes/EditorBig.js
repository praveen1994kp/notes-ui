import React, { useState, forwardRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative'
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1
    },
    mainArea: {
        padding: theme.spacing(3, 2),
        margin: theme.spacing(5),
        width: '80%'
    },
    contents: {
        marginTop: theme.spacing(5)
    }
}))

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
})

export default function EditorBig({ title, content, id, isOpen, onClose, onSave }) {
    const classes = useStyles()
    const [_title, setTitle] = useState(title)
    const [_content, setContent] = useState(content)

    const handleSave = () => {
        onSave(id, _title, _content)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={onClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge='start' color='inherit' onClick={onClose} aria-label='close'>
                            <CloseIcon />
                        </IconButton>
                        <Typography variant='h6' className={classes.title}>
                            Edit Note
                        </Typography>
                        <Button autoFocus color='inherit' onClick={handleSave}>
                            Save
                        </Button>
                    </Toolbar>
                </AppBar>
                <Paper className={classes.mainArea}>
                    <Typography variant='h4'>
                        <TextField fullWidth id='note-title' label='Title' variant='outlined'
                            onChange={handleTitleChange} value={_title} />
                    </Typography>
                    <Typography variant='p'>
                        <TextField className={classes.contents} fullWidth id='note-content' label='Contents' multiline
                            onChange={handleContentChange} value={_content} />
                    </Typography>
                </Paper>
            </Dialog>
        </div>
    )
}