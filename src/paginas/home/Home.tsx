import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    var background =
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "rgb(76, 161, 175)" }}></stop>
                    <stop offset="100%" style={{ stopColor: "rgb(196, 224, 229)" }}></stop>
                </linearGradient>
            </defs>
            <path id="blob" d="M400,321Q332,392,234.5,419Q137,446,114,348Q91,250,110,145.5Q129,41,234,68.5Q339,96,403.5,173Q468,250,400,321Z" fill="url(#gradient)"></path>
        </svg> 

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#2c3e50" }}>
                <Grid item xs={5} >
                    <Box paddingLeft={7} paddingTop={3}>
                        <Typography className='font' variant="h2" gutterBottom color="textPrimary" component="h2" align="left" style={{ color: "#95a5a6", fontWeight: "bold" }}>Valter Silva</Typography>
                        <Typography className='font' variant="h5" gutterBottom color="textPrimary" component="h5" align="left" style={{ color: "white", fontWeight: "bold" }}>Desenvolvedor Web FullStack</Typography>
                    </Box>
                    <Box display="flex" paddingLeft={7}>
                        <Box>
                            <Link to='/sobreNos' className='text-decorator-none'>
                                <Button className='bot2' style={{ fontWeight: "bold" }}>Mais sobr mim</Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box paddingRight={6} paddingTop={3} className='teste'>
                        <Box>
                            <img src="https://i.imgur.com/WewRlkd.png" alt="" width='650px' height='650px' />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;