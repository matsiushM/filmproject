import {useSelector} from "react-redux";
import {selectFilm} from "./selectors";

export const useFilms = () => useSelector(selectFilm);