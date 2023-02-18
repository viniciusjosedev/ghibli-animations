import { Link, useLocation } from 'react-router-dom';
import logo from '../styles/images/logo.svg';
import style from '../styles/Header.module.css';
import heart from '../styles/images/heart.svg';

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header className={ style.header }>
      <nav className={ style.nav }>
        <img src={ logo } alt="Logo" className={ style.logo } />
        <div className={ style.divFav }>
          <img className={ style.heart } src={ heart } alt="heart" />
          {pathname === '/favorites' ? (
            <Link className={ style.link } to="/">Films</Link>
          ) : (
            <Link className={ style.link } to="/favorites">Favorites</Link>
          )}
        </div>
      </nav>
    </header>
  );
}
