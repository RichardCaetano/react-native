import { ADD_ITEM, TOOGLE_REFILL_ITEM, UPDATE_ITEM, DELETE_ITEM, saveItem} from "../actions";

let nextId = 1;
const shoppingListItemReducer = (state = [], action) =>{
    switch (action.type) {
        case ADD_ITEM:
            
            const newItem = {
                itemId: nextId++,
                name: action.item.name,
                date: action.item.date,
                unit: action.item.unit,
                refill: true
            }
            //saveItem(newItem);
            return [...state, newItem];
        
        case UPDATE_ITEM:
            return state.map(item =>{
                if(item.itemId == action.item.itemId)
                    return action.item;
                return item;
            });

        case DELETE_ITEM:
            const newItem2 = [];            
            state.map((item,index) => {
                if (item.itemId != action.itemId)                
                    newItem2.push(item);
            });
            return newItem2;
            
        case TOOGLE_REFILL_ITEM:            
            return state.map(item =>{
                if(item.itemId == action.itemId)
                    return {
                        ...item,
                        refill: !item.refill
                    };
                return item;
            });           

        default:
            return state;

    }
};

export default shoppingListItemReducer;