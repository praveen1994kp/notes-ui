import React from 'react'
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
import moment from "moment";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 345
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


export default function Note({ title, lastMod, content }) {
    const classes = useStyles()
    const [expanded, setExpanded] = React.useState(true)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.card}>
            <CardHeader action={
                <IconButton aria-label='settings'>
                    <MoreVertIcon />
                </IconButton>
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
    )
}
