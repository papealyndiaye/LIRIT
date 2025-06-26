import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Login from './pages/Login';
import Publications from './pages/ProjetsPublications';
import EspaceMembre from './pages/EspaceMembre';
import Axes from './pages/axes';
import AxeDetail from './pages/axesDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/espace-membre" element={<EspaceMembre />} />
        <Route path="/axes" element={<Axes />} />
          <Route path="/axes/:id" element={<AxeDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
