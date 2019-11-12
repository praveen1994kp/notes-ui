export const getStorageMiddleware = storageId => store => next => action => {
    let result = next(action)
    localStorage.setItem(storageId, JSON.stringify(store.getState()))
    return result;
}