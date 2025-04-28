import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout/Layout.tsx';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />} />
            </Routes>
        </Router>
    );
}

export default App;
