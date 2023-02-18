import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import FilmsContext from './context/FilmsContext';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';

function App() {
  const [state, setState] = useState({ request: [], favorites: [] });

  const fetchAPI = async () => {
    const data = await (await fetch('https://api-trybe-frontend.vercel.app/api/ghibli-animations')).json();
    setState({ ...state, request: data });
    return { request: data };
  };

  useEffect(() => {
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Switch>
      <FilmsContext.Provider value={ { state, setState } }>
        <Route
          exact
          path="/favorites"
          render={ (props) => (
            <>
              <Header />
              <Favorites { ...props } />
              <Footer />
            </>
          ) }
        />
        <Route
          exact
          path="/"
          render={ (props) => (
            <>
              <Header />
              <Home { ...props } />
              <Footer />
            </>
          ) }
        />
      </FilmsContext.Provider>
    </Switch>
  );
}

export default App;
