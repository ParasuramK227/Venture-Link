import ChoicePage from '../assets/Components/ChoicePage.jsx';
import LandingPage from '../assets/Components/LandingPage.jsx'
import React from 'react';
import NichePage from '../assets/Components/NichePage.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App(){
    return(
        
        <>
            {/* <LandingPage/> */}
            {/* <ChoicePage/> */}
            <NichePage/>
        </>
    )
}