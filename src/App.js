import './App.css';
import TextControlsExample from './components/Create';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import BlogDetails from './components/BlogDetails';
// import Contact from './components/Contacts';

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
      
        <div className="content">
        <Switch>
          
          {/* <Form /> */}
        
          <Route exact path="/">
              <Home/>
          </Route>

          <Route exact path="/Create" >
            <TextControlsExample />
          </Route>
              
          {/* <Route exact path="/Contact">
            <Contact/>
          </Route> */}

          <Route path="/Blog-details/:id">
          <BlogDetails />
          </Route>
    
        </Switch>
        </div>
      
      </div>
    </Router>

  );
}

export default App;
