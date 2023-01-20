import React from 'react' ;
import { Typography , TextField , Button } from '@mui/material';
const SignUp =  () => {
    return (
        <>
        <form
        noValidate
        autoComplete='off'>
        <Typography variant ="h5"> signUp</Typography>
        <TextField
        id = "enter-name"
        label = "enterName"
        variant='outlined'
        fullWidth
        />
        <TextField
        id = "enter-email"
        label = "enterEmail"
        variant='outlined'
        fullWidth
        />
        <TextField
        id = "enter-password"
        type= "password"
        label = "enterPassword"
        variant='outlined'
        fullWidth
        />
        <Button
        variant="outlined"
        color ="primary"
        type = "submit">
        SignUp
        </Button>
        </form>
        </>
    );
}


export default SignUp ; 