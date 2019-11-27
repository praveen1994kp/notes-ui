export const UPDATE_SEARCH = 'UPDATE_SEARCH'

export const updateSearch = (searchStr) => {
    return {
        type: UPDATE_SEARCH,
        payload: {
            searchStr
        }
    }
}