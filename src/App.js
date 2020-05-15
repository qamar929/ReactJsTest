import React from 'react';

import './App.css';
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import MyForm from './components/MyForm';
import ListExample from './components/ListExample';
import { BrowserRouter, Route, Switch ,Link} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Qamar hello </h1>
        <FunctionalComponent name="Qamar" />
        <Link to="/">List</Link>
        <Link to='/form'>  open form</Link>

                <Switch>
          <Route path="/form" component={MyForm} />

          <Route path="/" exact component={ListExample} />
          <Route path="/:id" exact component={ListExample} />
        </Switch>

      </div>

    </BrowserRouter>
  );
}

export default App;
