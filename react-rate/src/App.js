// import logo from './logo.svg';
import Rate from './components/Rate/Rate';
import Calc from './components/Calc/Calc';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import{BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';

export default function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={Rate}/>
              <Route exact path="/component/Calc/" component={Calc}/>
          </Switch>
      </Router>
      <Footer />
    </div>
  );
}


