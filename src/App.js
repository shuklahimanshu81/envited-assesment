
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateEvent from './View/CreateEvent';
import Events from './View/Events';
import Landing from './View/Landing';

function App() {
  return (
    <Routes>
    <Route
      path="/"
      element={<Landing/>}
    />
     <Route
      path="/create"
      element={<CreateEvent/>}
    />
    <Route
      path="/events"
      element={<Events/>}
    />
  </Routes>

  );
}

export default App;
