import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Molecule/Header';
import Contenedor from './Components/Organism/Contenedor';
import Contacto from './Components/Organism/Contacto';
import DetallePersonaje from './Components/Molecule/DetallePersonaje';
import MainMenu from './MainMenu';
import DatosApi from './Components/Molecule/DatosApi';

function App() {
    return (
      <Router>
        <MainMenu />
        <Switch>
          <Route path="/" exact component={ Header } />
          <Route path="/personajes/:id" exact component={ DetallePersonaje } />
          <Route path="/personajes" exact component={ Contenedor } />
          <Route path="/contacto" exact component={ Contacto } />
          <Route path="/datos_api" exact component={ DatosApi } />
          <Route component={ ()=>(
            <h1>Pagina no encontrada</h1>
          ) } />
        </Switch>
      </Router>
    )
}

export default App;