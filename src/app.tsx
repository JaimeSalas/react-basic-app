import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { ListPage, LoginPage, DetailPage } from './pages';

export const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<LoginPage />} />
                <Route path='/list' element={<ListPage />} />
                <Route path='/detail/:id' element={<DetailPage />} />
            </Routes>
        </Router>
    );
}
