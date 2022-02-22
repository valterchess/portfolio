import React, { useEffect } from 'react';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './Home.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/statics/navbar/Navbar';

function Home() {
    return (
        <>
        <main>
        <section id='home'>
            <Grid container className='base'>
                <Navbar/>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Box paddingLeft={10} paddingTop={6}>
                    <Typography className='font' variant="h2" component="h2" align="left" style={{ color: "white", fontWeight: "bold" }}>Valter Silva</Typography>
                        <Typography className='font' variant="h5" component="h5" align="left" style={{ color: "#00ffea", fontWeight: "bold" }}>Desenvolvedor</Typography>
                        <Typography className='font' variant="h6" component="h6" align="left" style={{ color: "white", fontWeight: "bold" }}>Com foco na construção de APIs RestFull e Aplicações Web</Typography>
                        <Box paddingTop={2} paddingBottom={22} >
                            <Box>
                                <a href='#sobre' className="text-decorator-none">
                                    <Button className='bot2' style={{ fontWeight: "bold" }}>Sobre mim</Button>
                                </a>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            </section>
        </main>
        </>
    );
}

export default Home;