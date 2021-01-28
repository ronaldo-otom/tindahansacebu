import {items} from '../../../api/sampleItems.api';

const initialState = items;

export const StoreProfileReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_DATA': return {
            ...state
        };
        default: return state
    }
}