import React from "react";
import {Box, Container} from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
    container: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        overflow: "hidden",
    }
}
export function FavoritePage(){
    return (
        <Container sx={style.container}>
            <Typography>Hello</Typography>
        </Container>
    )
}