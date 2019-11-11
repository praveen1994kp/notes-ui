export const ADD_NOTE = 'ADD_NOTE'
export const UPDATE_NOTE = 'UPDATE_NOTE'

export const addNote = ({ id, title, content }) => {
    return {
        type: ADD_NOTE,
        payload: {
            id,
            title,
            content,
            lastMod: new Date()
        }
    }
}

export const updateNote = (id, title, content) => {
    return {
        type: UPDATE_NOTE,
        payload: {
            id,
            title,
            content,
            lastMod: new Date()
        }
    }
}