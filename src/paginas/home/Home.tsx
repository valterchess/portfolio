import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Box, Button } from '@material-ui/core';
import './Home.css';
function Home() {
    return (
        <>
            <Box className='base'>
                <Typography className='font' variant="h2" component="h2" style={{ color: "white", fontWeight: "bold" }}>Valter Silva</Typography>
                <Typography className='font' variant="h5" component="h5" style={{ color: "#00ffea", fontWeight: "bold" }}>Desenvolvedor web java ☕</Typography>
                <Typography className='font' variant="h6" component="h6" style={{ color: "white", fontWeight: "bold" }}>Com foco na construção de APIs RestFull e Aplicações Web</Typography>
                <Link to='/sobre' className="text-decorator-none">
                    <Button className='bot2'>Sobre mim</Button>
                </Link>
            </Box>
        </>
    );
}
export default Home;