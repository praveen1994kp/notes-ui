import { combineReducers } from 'redux'
import {notes} from '../components/notes/reducer'

const rootReducer = combineReducers({
    notes
})

export default rootReducer