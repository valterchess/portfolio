import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let history = useHistory();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className='header'>
                <Link to='/home' className='text-decorator-none'>
                    <Box paddingLeft={4}>
                        <Box>
                            <Typography className='font' variant="h4" gutterBottom color="textPrimary" component="h4" align="left" style={{ color: "blak", fontWeight: "bold" }}>Valter Silva</Typography>
                            <Typography className='font' variant="h6" gutterBottom color="textPrimary" component="h6" align="left" style={{ color: "black", fontWeight: "bold" }}>Desenvolvedor 💻</Typography>
                        </Box>
                    </Box>
                </Link>
                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            sair
                        </Typography>
                    </Box>

                </Box>

            </Toolbar>
        </AppBar>
    } else {
        navbarComponent = <AppBar variant='elevation' className='header'>
            <Toolbar className='tooHeader'>
                <Link to='/home' className='text-decorator-none'>
                    <Box paddingLeft={1}>
                        <Box display="flex">
                            <Typography className='font' variant="h5" gutterBottom color="textPrimary" component="h5" style={{ color: "black", fontWeight: "bold" }}>Valter Silva</Typography>
                            <Typography className='font' variant="h6" gutterBottom color="textPrimary" component="h6" style={{ color: "black", paddingLeft: "12px" }}>Desenvolvedor 💻</Typography>
                        </Box>
                    </Box>
                </Link>
                <Box display="flex" justifyContent="end">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                início
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/login" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">login</Typography>
                        </Box>
                    </Link>
                    <Link to='/cadastrousuario' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant='h6' color="inherit">Cadastro</Typography>
                        </Box>
                    </Link>
                </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}
/*{
    <Link to="/sobre" className="text-decorator-none">
    <Box mx={1} className='cursor'>
        <Typography variant="h6" color="inherit">
            sobre
        </Typography>
    </Box>
</Link>
<Link to="/projetos" className="text-decorator-none">
    <Box mx={1} className='cursor'>
        <Typography variant="h6" color="inherit">
            projetos
        </Typography>
    </Box>
</Link>
}*/
export default Navbar;