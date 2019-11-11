import { ADD_NOTE, UPDATE_NOTE } from './actions'

export const notes = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_NOTE:
            {
                const { id, title, content, lastMod } = payload
                return state.concat({
                    id,
                    title,
                    content,
                    lastMod
                })
            }
        case UPDATE_NOTE:
            {
                const { id, title, content, lastMod } = payload
                return state.map((note) => {
                    if (note.id === id) {
                        return {
                            id,
                            title,
                            content,
                            lastMod
                        }
                    }
                    return note
                })
            }
        default:
            return state
    }
}