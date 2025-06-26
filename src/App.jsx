import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Publications from './pages/Publications';
import EspaceMembre from './pages/EspaceMembre';
import Collaboration from './pages/collaboration';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/espace-membre" element={<EspaceMembre />} />
        <Route path="/collaboration" element={<Collaboration />} /> 
      </Routes>
    </Router>
  );
}

export default App;
