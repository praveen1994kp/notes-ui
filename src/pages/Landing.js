import React from 'react'
import {Typography, Container} from '@material-ui/core'
import NotesContainer from '../components/notes/NotesContainer'



const Landing = () => {
    return (
        <React.Fragment>
            <Container maxWidth = 'lg'>
                <Typography component='div' style={{height: '100vh' }} ><NotesContainer /></Typography>
            </Container>
        </React.Fragment>
    )
}

export default Landing