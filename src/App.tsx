import {
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CreateContact from './components/CreateContact';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-contact" element={<CreateContact />} />
      </Routes>
    </>
  );
}

export default App;
