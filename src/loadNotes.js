import { NOTES_LOCAL_STORAGE_ID } from './components/notes/Notes'

export const loadNotes = () => {
    const storedState = localStorage.getItem(NOTES_LOCAL_STORAGE_ID)
    let notes = []
    if (storedState) {
        const parsedState = JSON.parse(storedState)
        if (parsedState.notes) {
            notes = parsedState.notes
            console.info('Retrieved from browser storage!', notes)
        }
    }
    return notes
}
