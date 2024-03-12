import 'bootstrap/dist/css/bootstrap.css';
import NavigationBar from './components/NavigationBar.js';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Impacto from './pages/impacto.js';
import Hompage from './pages/homepage.js';
import Testimonios from './pages/testimonios.js';
import Transparencia from './pages/transparencia.js'
import Footer from './components/footer.js';
import { Helmet } from 'react-helmet';
import Campanias from './pages/campanias.js';
import Campania from './pages/campania.js';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Juntos por los demas</title>
      </Helmet>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Hompage />} />
        <Route path="/impacto" element={<Impacto />} />
        <Route path='/testimonios' element={<Testimonios />} />
        <Route path='/transparencia' element={<Transparencia />} />
        <Route path='/campanias' element={<Campanias />} />
        <Route path='/campanias/:id' element={<Campania />} />
        <Route path='/campania' element={<Campania />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
