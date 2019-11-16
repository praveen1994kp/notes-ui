import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './actions'
import _ from 'lodash'

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
        case DELETE_NOTE:
            {
                const {id} = payload
                return _.remove(state, note => note.id !== id)
            }
        default:
            return state
    }
}