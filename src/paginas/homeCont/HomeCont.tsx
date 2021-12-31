import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Grid, Button } from '@material-ui/core';
import './HomeCont.css';

function HomeCont() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='homeBase'>
                <Grid item xs={8}>
                    <Box paddingLeft={7} paddingTop={3} paddingBottom={15} >
                        <Typography className='font' variant="h5" gutterBottom color="textPrimary" component="h5" align="left" style={{ color: "#95a5a6", fontWeight: "bold" }}>Entre, compartilhe e acompanhe notícias e informações sobre tecnologia e afins</Typography>
                        <Box>
                            <Link to='/login' className='text-decorator-none'>
                                <Button className='bot2' style={{ fontWeight: "bold" }}>Entre</Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <Box paddingRight={8}>
                        <Typography className='font' variant="h5" gutterBottom component="h5" align="right" style={{ color: "#95a5a6", fontWeight: "bold" }}>Conheça meu projeto baseado na ODS 11 da ONU desenvolvido com o grupo 5 na Generation Brasil</Typography>
                        <Box paddingRight={6} paddingTop={3} className='content-group'>
                            <a href="https://urbanize.vercel.app/home" target="_blank">
                                <img src="https://i.imgur.com/lCJCNkF.png" alt="urbanize" width='300px' height='150px' style={{ borderRadius: '6px' }} />
                            </a>
                            <Typography variant="h6" gutterBottom component="h6" align="center" style={{ color: "#95a5a6", fontWeight: "bold" }}>Urbanize</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default HomeCont;