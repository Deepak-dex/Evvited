import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom'

import LandingPage from './pages/landing/LandingPage';
import EventsPage from './pages/event/EventsPage';
import CreateEventPage from './pages/createEvent/CreateEventPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/event" element={<EventsPage />}/>
          <Route path="/create" element={<CreateEventPage />}/>
      </Routes>
    </div>
  );
}

export default App;
