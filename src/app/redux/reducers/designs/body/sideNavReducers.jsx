import { items } from '../../../../api/sampleItems.api'

const initialState = items
export const SidenavReducers = (state=initialState, action) => {
    switch(action){
        case 'FETCH_DATA': return {
            ...state
        }
        default: return state
    }
}
