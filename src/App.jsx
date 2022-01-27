import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Service from './Service';
import Navbar from './Navbar';
function App() {

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/service" component={Service} />
        <Redirect to="/"></Redirect>
      </Switch>

    </>
  );
}

export default App;
