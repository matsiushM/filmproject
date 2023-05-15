import React, {useEffect, useState} from "react";
import {Box, Button, Container, Grid} from "@mui/material";

import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import {ArrowCircleLeftOutlined, ArrowCircleRightOutlined, Image} from "@mui/icons-material";
import {FilmInfo} from "../../models/models";
import {useFilms} from "../FilmList/hooks";
import CardMedia from "@mui/material/CardMedia";
import {isNestedFrozen} from "@reduxjs/toolkit/dist/serializableStateInvariantMiddleware";
import {usePointPageQuery} from "../../store/Films/Films.api";


const style = {
    backgroundCard: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "75%",
        height: "75%",
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
    },

    box: {
        width: "100%",
        height: "100%",
        color: "white",
        backdropFilter: "blur(25px)",
    },

    boxCard: {
        position: 'absolute',
        top: "50%",
        left: "50%",
        transform: 'translate(-50%, -50%)',
        color: 'inherit',

    },

    img: {
        objectFit: 'container',
        backgroundPosition: 'contain',
        height: 350,
    },

    button: {
        color: "inherit",
        width: 200,
        height: 50,
        border: 2,
    }
};

interface CardProps {
    filmId: number,
}

const FilmCardInfo = ({filmId}: CardProps) => {
    const filmList = useFilms();

    const [page, setPage] = useState<number>(filmList?.page);
    const {isLoading, isError, data, refetch} = usePointPageQuery(page);

    let film = data?.results.find((item: FilmInfo) => item.id === filmId);
    const [filmItem, setFilmItem] = useState<FilmInfo>(film!);



    const nextFilm = () => {
        let index = data?.results.indexOf(filmItem)!;
        setFilmItem(data?.results[++index]!);
        if(index === 19){
            console.log(index)
            index = 0;
            let p = page;
            console.log(p)
            setPage(++p);
        }


    }

    const urlBackdrop = "http://image.tmdb.org/t/p/w1280" + filmItem?.backdrop_path;
    const urlPoster = "http://image.tmdb.org/t/p/w400" + filmItem?.poster_path;

    style.backgroundCard.backgroundImage = `url(${urlBackdrop})`



    return (<Box sx={style.backgroundCard}>
        <Box sx={style.box}>

            <Toolbar>
                <Button sx={{grid: 1, color: "inherit"}} startIcon={<ArrowCircleLeftOutlined/>}>Back to list</Button>

                <Button sx={{ml: "auto", color: "inherit"}}
                        endIcon={<ArrowCircleRightOutlined/>}
                        onClick={() =>{nextFilm()}}
                >Next Movie</Button>
            </Toolbar>

            <Container sx={style.boxCard}>
                <Grid container spacing={2}>
                    <Grid item>
                        <CardMedia sx={style.img} component="img" image={urlPoster}/>
                    </Grid>
                    <Grid item sm container>
                            <Grid item>
                                <Typography variant={"h4"}>{filmItem?.title}</Typography>
                                <Typography variant={"h5"}>
                                    Score {filmItem?.vote_average} | Release Date {filmItem?.release_date}
                                </Typography>
                            </Grid>

                            <Grid item sx={{p: 3}}>
                                <Button sx={style.button}>Add to favorite</Button>
                            </Grid>
                            <Typography sx={{p: 2}}>{filmItem?.overview}</Typography>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    </Box>);
};
export default FilmCardInfo;