import { SET_EDITING_ITEM, ADD_ITEM, UPDATE_ITEM, DELETE_ITEM } from "../actions";

const INITIAL_STATE = {
    itemId: null,
    unit: '',
    name: '',
    date: '',
    refill: true
};

const editingItemReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case SET_EDITING_ITEM:
            if(action.item.parc == 'name')
                return{
                    ...state,
                    name: action.item.name,
                }
            if(action.item.parc == 'date')
            return{
                ...state,
                date: action.item.date,
            }

            return action.item;
        case ADD_ITEM:
        case UPDATE_ITEM:
        case DELETE_ITEM:
            return INITIAL_STATE;

        default:
            return state;
    }
}

export default editingItemReducer;