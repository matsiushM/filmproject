import {GlobalStyles as MuiGlobalStyles} from "@mui/material";

const globalStyles = () => ({
    html: {
        height: "100%",
        width: "100%",
        margin: 0,
    },
    body: {
        height: "100%",
        width: "100%",
        margin: 0,
    },
});

const GlobalStyle = () =>{
    return <MuiGlobalStyles styles={globalStyles}></MuiGlobalStyles>
}

export default GlobalStyle;