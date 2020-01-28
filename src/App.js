import React from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* Páginas */
import Login from './view/login';
import NovoUsuario from './view/usuario-novo';
import Home from './view/home';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha/';
import EventoCadastro from './view/evento-cadastro/';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/login' component={Login} />
        <Route exact path='/novousuario' component={NovoUsuario} />
        <Route exact path='/' component={Home} />
        <Route exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha} />
        <Route exact path='/eventocadastro' component={EventoCadastro} />


      </Router>
    </Provider>
  );
}

export default App;
