import { Link, useLocation } from 'react-router-dom';
import '../App.css';
import './NavTabs.css';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div id="navTabsContainer">
      <div>
        <h1 id="title" >Shobha Ganesh</h1>
      </div>

      <ul className="nav nav-tabs tabs">
        <li className="nav-item">
          <Link
            to="/"
            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Portfolio"
            className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Contact"
            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/Resume"
            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;