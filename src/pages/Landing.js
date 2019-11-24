import React from 'react'
import {Typography, Container} from '@material-ui/core'
import NoteSample from './NoteSample'
/* import NotesContainer from '../components/notes/NotesContainer' */



const Landing = () => {
    return (
        <React.Fragment>
            <Container maxWidth = 'lg'>
                <Typography component='div' style={{height: '100vh' }} ><NoteSample /></Typography>
            </Container>
        </React.Fragment>
    )
}

export default Landing

/*<div><NotesContainer/></div>*/