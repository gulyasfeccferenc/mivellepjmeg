export const ADD_WISHLIST_ITEM = 'ADD_WISHLIST_ITEM';

export const addWishListItem = (listItem) => {
    return {
        type: ADD_WISHLIST_ITEM,
        listItem: listItem,
        personalList: {}
    }
}
