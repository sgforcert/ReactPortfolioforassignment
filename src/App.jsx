import { Outlet } from 'react-router-dom';
import NavTabs from './components/NavTabs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 style={{ margin: 0 }}">
      <NavTabs />
      <main className="flex-fill mx-3 mainContainer">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
