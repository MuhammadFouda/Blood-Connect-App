import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './AppRouter';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
