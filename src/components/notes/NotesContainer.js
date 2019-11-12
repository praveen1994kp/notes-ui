import React from 'react'
import { connect } from 'react-redux'
import Notes from './Notes'
import { addNote, updateNote, deleteNote } from './actions'

const mapStateToProps = (state) => {
    const { notes } = state
    return {
        notes
    }
}

export default connect(mapStateToProps, {
    addNote,
    updateNote,
    deleteNote
})(Notes)