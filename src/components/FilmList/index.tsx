import {Container, ImageList} from "@mui/material";
import FilmItem from "../FilmItem";
import Typography from "@mui/material/Typography";
import React from "react";
import {FilmInfo} from "../../models/models";
import {useFilms} from "./hooks";

const style = {
    typography: {
        color: "grey",
        m: 2,
    }
}

const FilmList = () => {
    const films = useFilms();

    return (
        <Container>
            <Typography variant={"h6"} sx={style.typography}>Latest Releases</Typography>
            {films && (
                <ImageList cols={5}>
                    {films.results.map((item: FilmInfo) => (
                        <FilmItem key={item.id} imagePath={item.poster_path} filmId={item.id}/>
                    ))}
                </ImageList>)}
        </Container>
    );
};


export default FilmList;