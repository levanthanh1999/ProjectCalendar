import React from 'react';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Ads from './Pages/Ads';
import Calender from './Pages/Calender';
import Campaign from './Pages/Campaign';
import Settings from './Pages/Settings';
import Signout from './Pages/Signout';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="sidebar">
          <Sidebar />
        </div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/analytics' element={<Analytics />} /> 
            <Route path='/ads' element={<Ads />} />
            <Route path='/calender' element={<Calender />} />
            <Route path='/campaign' element={<Campaign />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/signout' element={<Signout />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
