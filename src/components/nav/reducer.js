import { UPDATE_SEARCH } from "./actions";

export const search = (state = '', { type, payload }) => {
    switch (type) {
        case UPDATE_SEARCH: {
            return payload.searchStr
        }
        default: {
            return state
        }
    }
}