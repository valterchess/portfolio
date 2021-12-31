import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#2c3e50" }}>
                <Grid item xs={5} >
                    <Box paddingLeft={7} paddingTop={10}>
                        <Typography className='font' variant="h2" gutterBottom color="textPrimary" component="h2" align="left" style={{ color: "#95a5a6", fontWeight: "bold" }}>Olá eu sou Valter Silva</Typography>
                        <Typography className='font' variant="h4" gutterBottom color="textPrimary" component="h4" align="left" style={{ color: "white", fontWeight: "bold" }}>Desenvolvedor Web FullStack Java e React ☕</Typography>
                        <Typography className='font' variant="h6" gutterBottom color="textPrimary" component="h6" align="left" style={{ color: "white", fontWeight: "bold" }}>
                            Me identifiquei com a área de desenvolvimento por ser uma
                            área desafiadora e que nos proporciona um grande potencial de
                            crescimento.
                            Hoje estou construindo o caminho para me tornar especialista em
                            java, e futuramente me graduar em ciêncica da computação e me tornar referência na área de desenvolvimento.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box paddingRight={6} paddingTop={3} className='teste'>
                        <Box>
                            <a href="https://www.linkedin.com/in/valter-silva-5a44b1171/" target="_blank">
                                <img src="https://i.imgur.com/B9qkKgg.png" alt="imagem em preto e branco" width='450px' height='450px' style={{ borderRadius: '35%' }} />
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;