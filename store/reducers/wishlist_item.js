import { ADD_WISHLIST_ITEM } from '../actions/wishlist_item';
import WishListItem from "../../models/WishListItem";
import {WISHLIST_ITEMS} from "../../data/dummy-data";


const initialState = {
    wishList: WISHLIST_ITEMS
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_WISHLIST_ITEM:
            const newItem = new WishListItem(new Date().toString(), action.listItem.name, action.listItem.detail, 'https://gulyasfeccferenc.github.io', '', '', '', '');
            return {
                ...state,
                personalList: state.personalList.concat(newItem)
            }
    }

    return state;
}
