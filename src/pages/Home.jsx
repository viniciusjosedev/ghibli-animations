import { useContext } from 'react';
import { Button } from 'reactstrap';
import FilmsContext from '../context/FilmsContext';
import style from '../styles/Home.module.css';
import Films from '../styles/images/Films.svg';

export default function Home() {
  const { state: { request, favorites }, state, setState } = useContext(FilmsContext);
  // console.log(favorites);

  return (
    <main className={ style.main }>
      <img className={ style.films } src={ Films } alt="Films" />
      <div className={ style.divFilms }>
        {request.map((e) => (
          <div className={ style.divFilm } key={ e.title }>
            <h5>{e.title}</h5>
            <img className={ style.img } src={ e.image } alt={ e.title } />
            <Button
              type="button"
              color="success"
              className={ style.button }
              onClick={ () => setState({ ...state,
                favorites: favorites.some((elemento) => elemento.title === e.title)
                  ? [...favorites.filter((element) => element.title !== e.title)]
                  : [...favorites, e] }) }
            >
              {favorites.some((element) => e.title === element.title)
                ? 'Tirar dos Favoritos' : 'Favoritar'}
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
}
