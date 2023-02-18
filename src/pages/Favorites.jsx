import { useContext } from 'react';
import { Button } from 'reactstrap';
import FilmsContext from '../context/FilmsContext';
import style from '../styles/Favorites.module.css';
import logoFavorites from '../styles/images/Favorites.svg';

export default function Favorites() {
  const { state: { favorites }, state, setState } = useContext(FilmsContext);
  return (
    <main className={ style.main }>
      <img className={ style.logoFavorites } src={ logoFavorites } alt="" />
      <div
        className={ style.divFilms }
      >
        {favorites.map((e) => (
          <div
            className={ style.divFilm }
            style={ { marginRight: favorites.length > 1 ? '68px' : null } }
            key={ e.title }
          >
            <h5>{e.title}</h5>
            <img className={ style.img } src={ e.image } alt={ e.title } />
            <Button
              type="button"
              color="danger"
              className={ style.button }
              onClick={ () => setState({ ...state,
                favorites: [
                  ...favorites.filter((elemento) => e.title !== elemento.title)] }) }
            >
              Excluir
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
