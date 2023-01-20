import React from 'react' ;
import { Typography , TextField , Button } from '@mui/material';
const SignIn =  () => {
    return (
        <>
        <form
        noValidate
        autoComplete='off'>
        <Typography variant ="h5"> SignIn</Typography>
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
        SignIn
        </Button>
        </form>
        </>
    );
}


export default SignIn ; 