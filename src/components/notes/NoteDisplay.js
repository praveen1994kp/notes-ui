import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CopyIcon from '@material-ui/icons/FileCopy'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Grow from '@material-ui/core/Grow';
import moment from "moment";
import { MenuItem, Select } from '@material-ui/core'

import EditorBig from "./EditorBig";

const useStyles = makeStyles(theme => ({
    card: {
        width: 345
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
}))




export default function Note({ id, title, lastMod, content, onDelete, onUpdate }) {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(true)
    const [editorOn, setEditorOn] = useState(false)

    const handleDelete = () => {
        onDelete(id)
    }

    const onEditorClose = () => {
        setEditorOn(false)
    }

    const handleNoteSave = (id,title,content) => {
        onUpdate(id,title,content)
        setEditorOn(false)
    }

    const handleOptionsChange = event => {
        const value = event.target.value
        switch (value) {
            case 'delete':
                handleDelete()
                break
            case 'edit':
                setEditorOn(true)
                break
        }
    }

    const NoteOptions = () => {
        return (
            <Select value='' onChange={handleOptionsChange} disableUnderline IconComponent={MoreVertIcon}>
                <MenuItem value='edit'>Edit</MenuItem>
                <MenuItem value='delete'>Delete</MenuItem>
            </Select>
        )
    }

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <React.Fragment>
            <Grow in {...({ timeout: Math.random() * 1500 })}>
                <Card className={classes.card}>
                    <CardHeader action={
                        <NoteOptions />
                    }
                        title={title}
                        subheader={lastMod ? moment(lastMod).format('MMMM Do YYYY') : ''}
                    />
                    <CardActions disableSpacing>
                        <IconButton aria-label='share'>
                            <CopyIcon />
                        </IconButton>
                        <IconButton className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded
                        })}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label='show more'
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={expanded} timeout='auto' unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                {content}
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Grow>
            <EditorBig onSave={handleNoteSave} id={id} title={title} content={content} isOpen={editorOn} onClose={onEditorClose} />
        </React.Fragment>
    )
}
