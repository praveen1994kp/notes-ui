import { connect } from 'react-redux'
import NotesDisplay from './NotesDisplay'
import { addNote, updateNote, deleteNote } from './actions'

const mapStateToProps = (state) => {
    const { notes, search } = state
    return {
        notes,
        search
    }
}

export default connect(mapStateToProps, {
    addNote,
    updateNote,
    deleteNote
})(NotesDisplay)