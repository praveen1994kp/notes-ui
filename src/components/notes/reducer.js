import { ADD_NOTE, UPDATE_NOTE } from './actions'

export const notes = (state = [], { type, payload }) => {
    switch (type) {
        case ADD_NOTE:
            {
                const { title, content, lastMod } = payload
                return state.concat({
                    title,
                    content,
                    lastMod
                })
            }
        case UPDATE_NOTE:
            {
                const { id, title, content, lastMod } = payload
                return state.map((note, index) => {
                    if (index === id) {
                        return {
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