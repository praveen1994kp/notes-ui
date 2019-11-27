import { combineReducers } from 'redux'
import {notes} from '../components/notes/reducer'
import { search } from "../components/nav/reducer";

const rootReducer = combineReducers({
    notes,
    search
})

export default rootReducer