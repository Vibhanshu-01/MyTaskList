import React from 'react' ;

import { Typography , Button , ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
const Mytask =  () => {
    return (
        <>
        <div>
        <div>
        <Typography variant = "subtitle1">
         make this application
        </Typography>
        <Typography variant = "body2">
         author: vibhanshu
        </Typography>
        <Typography variant = "body2">
          Addedv: 4 days ago
        </Typography>
        </div>
        <div>
        <ButtonGroup  size="small" aria-label = "outlined">
        <Button>
        completed
        </Button>
        <Button>
        edit
        </Button>
        <Button>
         delete
        </Button>
        </ButtonGroup>
        </div>
        </div> 
        </>
    );
}


export default Mytask ; 