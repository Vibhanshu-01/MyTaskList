import React from 'react' ;
import {AppBar , Typography , Toolbar, Button} from "@mui/material"
import {Link , useNavigate} from "react-router-dom"







const NavBar =  () => {
    const navigate = useNavigate();

    const handleSignOut = () => {
        navigate('/signin');
    }
    return (
        <>
        <AppBar position = "static" color ="secondary" >
        <Toolbar>
        <Typography variant="h4" >
        <Link to="/">
        MyTaskList
        </Link>
        </Typography>
        <Typography  variant="subtitle2" >
        Logged in as Vibhanshu
        </Typography>
        <Button  onClick={()=> handleSignOut()}>
        SignOut
        </Button>
        <Button>
        <Link to='/signin'>
        SignIn
        </Link>
        </Button>
        <Button>
        <Link to='/signup'>
        SignUp
        </Link>
        </Button>

        </Toolbar>
        </AppBar>
        </>
    );
}


export default NavBar; 