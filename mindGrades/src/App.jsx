import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/sideNavBar';
import TopNavBar from './components/topNavBar';
import MainContent from './components/MainContent';


function App() {
    return (
        <div className="App">
            <SideNavBar />
            <TopNavBar />
            <MainContent />
        </div>
    );
}

export default App;