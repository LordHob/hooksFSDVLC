
import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Containers/Home/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

        <Header/>
      
        <Switch>

          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>

        </Switch>

        <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
