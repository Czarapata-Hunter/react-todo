import './App.css';
import Auth from './components/Auth/Auth.js';
import Header from './components/Header/Header.js';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route exact path="/" />
      </Switch>
    </div>
  );
}

export default App;
