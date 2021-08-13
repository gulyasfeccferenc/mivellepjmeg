export const ADD_LIST_ITEM = 'ADD_LIST_ITEM';

export const addListItem = (listItems) => {
    return {
        type: ADD_LIST_ITEM,
        personalList: { listItems }
    }
}
