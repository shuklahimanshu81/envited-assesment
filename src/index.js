import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { EventProvider } from './ContextProviders/EventsProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EventProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </EventProvider>
  </React.StrictMode>
);


