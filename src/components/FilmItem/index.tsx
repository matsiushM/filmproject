import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {ImageListItem, Modal, Paper} from '@mui/material';
import FilmCardInfo from "../FilmCardInfo";


const style = {
    cardMedia: {
        objectFit: 'container',
        backgroundPosition: 'contain',
        Width: 360,
        height: 400,
    }
}

interface ImageProps {
    imagePath: string,
    filmId: number
}

const FilmItem = ({imagePath, filmId}: ImageProps) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const url = "http://image.tmdb.org/t/p/w400" + imagePath;

    return (
        <ImageListItem sx={{m: 1}}>
            <Paper elevation={3}>
                <CardMedia sx={style.cardMedia} component="img" image={url} onClick={handleOpen}/>
            </Paper>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <FilmCardInfo filmId={filmId}/>
            </Modal>
        </ImageListItem>
    );
}

export default FilmItem;