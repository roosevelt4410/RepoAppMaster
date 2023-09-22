
import Apps from './Components/Apps';
import Home from './Components/Home';
import Navbar from './Routes/Navbar';
import { Route, Routes } from 'react-router-dom';
import './index.css';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/apps" element={<Apps />} />
      </Routes>
    </div>
  );
}

export default App;
