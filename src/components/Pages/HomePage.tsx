import React, {useEffect, useState} from "react";
import FilmList from "../FilmList";
import {Box, Pagination} from "@mui/material";
import {usePointPageQuery} from "../../store/Films/Films.api";
import {useDispatch} from "react-redux";
import {addFilms} from "../../store/Films/FilmsSlice";

const style = {
    box: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        overflow: "hidden",
    },
    pagination: {
        display: "grid",
        justifyContent: "center",
        m: 3
    }
};

export function HomePage() {

    const dispatch = useDispatch();

    const [page, setPage] = useState(1);

    const {isLoading, isError, data,refetch} = usePointPageQuery(page);

    dispatch(addFilms(data));

    useEffect(() => {
        dispatch(addFilms(data));
    }, [page, data, dispatch]);

    return (
        <Box sx={style.box}>
            {data &&
                <FilmList/>
            }
            <Pagination
                sx={style.pagination}
                count={data?.total_pages}
                variant="outlined"
                shape="rounded"
                page={page}
                onChange={(_, newPage) => {
                    setPage(newPage);
                    refetch();}
                }
            />
        </Box>
    )
}