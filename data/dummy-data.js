import PersonalList from "../models/PersonalList";
import Colors from '../constants/colors';

export const PERSONAL_LIST_ITEMS = [
    new PersonalList('pl1', 'Születésnap', 'A legszebb nap az évben', Colors.highlight),
    new PersonalList('pl2', 'Névnap', 'Random alkalom az ivásra', Colors.highlight),
    new PersonalList('pl3', 'Karácsony', 'Kisjézus születése', Colors.highlight),
    new PersonalList('pl4', 'Ha bárki szeretne meglepni', 'Bármikor!', Colors.highlight),
]
