import { ADD_LIST_ITEM } from '../actions/personal_list';
import PersonalList from "../../models/PersonalList";
import {PERSONAL_LIST_ITEMS} from "../../data/dummy-data";

const initialState = {
    personalList: PERSONAL_LIST_ITEMS
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_LIST_ITEM:
            const newItem = new PersonalList(new Date().toString(), 'title', 'subtitle', 'color');
            return {
                ...state,
                personalList: state.personalList.concat(newItem)
            }
    }

    return state;
}
