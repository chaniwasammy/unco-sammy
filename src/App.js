import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';

import Home from './pages/Home';
import OurStory from './pages/OurStory';
import HireUs from './pages/HireUs';
import Donate from './pages/Donate';
import InnovationHubs from './components/InnovationHubs';
import BlogPage from './components/BlogPage';
import FirstBlog from './components/FirstBlog';

function App() {
  return (
    <Router>
       <Header />
      <Routes>
        <Route element={<Home/>}exact path='/Home' />
        <Route element={<OurStory/>}exact path='/OurStory' />
        <Route element={<InnovationHubs/>}exact path='/InnovationHubs' />
        <Route element={<HireUs/>}exact path='/HireUs' />
        <Route element={<Donate/>}exact path='/Donate'/>
        <Route element={<BlogPage/>}exact path='/Blog'/>
        <Route element={<FirstBlog/>}exact path='/Blog/:id'/>
   
        
       
      
      
      </Routes>
     
      
      
    </Router>
  );
}

export default App;
