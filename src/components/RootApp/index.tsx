import React from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../Pages/HomePage";
import {FavoritePage} from "../Pages/FavoritePage";
import ButtonAppBar from "../AppBar";

const style = {
    box: {
        backgroundColor: "#f5f5f5",
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        overflow: "hidden",
    },
};


const RootApp = () => {
    return (
        <>
            <ButtonAppBar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favorit" element={<FavoritePage/>}/>
            </Routes>
        </>
    )
}

export default RootApp;