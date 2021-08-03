import PersonalList from "../models/PersonalList";
import Colors from '../constants/colors';
import WishListItem from "../models/WishListItem";

export const PERSONAL_LIST_ITEMS = [
    new PersonalList('pl1', 'Születésnap', 'A legszebb nap az évben', Colors.highlight),
    new PersonalList('pl2', 'Névnap', 'Random alkalom az ivásra', Colors.highlight),
    new PersonalList('pl3', 'Karácsony', 'Kisjézus születése', Colors.highlight),
    new PersonalList('pl4', 'Ha bárki szeretne meglepni', 'Bármikor!', Colors.highlight),
]

export const WISHLISTITEMS = [
    new WishListItem('wl1', 'Árvíztűrő tükörfúrógép', 'A magyar nyelvő fontok legékesebb példamondata', '', '', '', true, Colors.primary),
    new WishListItem('wl2', 'Mountenbike', 'Ferikének légyszives', '', '', '', true, Colors.primary),
    new WishListItem('wl3', 'PlayStation 5', 'Haladni kell a korral', '', '', '', true, Colors.primary),
    new WishListItem('wl4', 'Multifunkciós nyomtató', 'Végre ki tudnám plakátolni a postaládát!', '', '', '', true, Colors.primary),
    new WishListItem('wl5', 'Fekvenyomópad', 'Lorem ipsum gipszum nem tudom hogyan lehet ilyet generálni', '', '', '', true, Colors.primary),
    new WishListItem('wl6', 'Felfújhatós fotel', 'Ozorán nagyon kényelmes lenne', '', '', '', true, Colors.primary),
]
