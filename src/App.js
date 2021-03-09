import logo from './logo.svg';
import React, {useState , useContext} from "react";
import counterContext from './Context';
import './App.css';
import Parent from './Parent';
import { Router } from 'react-router';
function App() {
return(


<Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        


        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
 </div>
<Router/>
);
}
<counterContext.Provider value = {sohail}>

function Home() {
  return(
   <h2>Home</h2>
  );
}
function About() {
  return <h2>About</h2>;
}

function Topics() {
  return <h2> asfraf bantoo </h2>;
}

</counterContext.Provider>


  
export default App;
