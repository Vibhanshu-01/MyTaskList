import React from 'react' ;
import Mytask from './Mytask';
import { Typography } from '@mui/material';
const ListMytasks =  () => {
    return (
        <>
        <div>
        <Typography variant = "h5">
          mytasks
        </Typography>
        <Mytask/>
        <Mytask/>
        </div>
        </>
    );
}


export default ListMytasks ; 