import React from 'react' ;

import { TextField , Button } from '@mui/material';
// import SendIcon from '@mui/icons-material/Send';

const AddMytask =  () => {
    return (
        <>
        <form>
        <TextField
        id="enter-mytask"
        variant = "outlined"
        label="enterMyTask"
        autoFocus
        fullWidth
        />
        
        <Button color="primary" variant = "contained" type="submit">
        add
        </Button>
        </form>
        </>
    );
}


export default AddMytask ; 