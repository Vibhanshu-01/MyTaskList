import React from 'react' ; 
import {BrowserRouter , Route, Routes} from "react-router-dom"
import { Container } from '@mui/system';

import Mytasks from './components/mytasks/Mytasks'
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import NavBar from './components/navBar/NavBar' ;

function App() {
  return (
    <>
    <BrowserRouter>
    <Container maxWidth = "md">
    <NavBar/>
    <Routes>
    <Route path='/signin' element = {<SignIn/>}/>
    <Route path='/signup' element = {<SignUp/>}/>
    <Route path='/' exact element={<Mytasks/>}/>
    </Routes>
    </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
