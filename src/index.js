import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './paginas/cadastro/home/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './paginas/cadastro/videos'
import CadastroCategoria from './paginas/cadastro/categoria';


const Pagina404 = () => (<div>Página 404</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact /> 
      <Route path="/cadastro/videos" component={CadastroVideo}/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route component={Pagina404} /> 
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

