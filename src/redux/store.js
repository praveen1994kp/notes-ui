import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'
import { loadNotes } from '../loadNotes'
import { getStorageMiddleware } from '../saveStore'
import { NOTES_LOCAL_STORAGE_ID } from './constants'

const preloadedState = {
    notes: loadNotes()
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(getStorageMiddleware(NOTES_LOCAL_STORAGE_ID)))
)

