import logo from './logo.svg';
import React, {useState , useContext} from "react";
import counterContext from './Context';
import './App.css';
import Parent from './Parent';
import Parent2 from './Parent2';
function App() {
return(

<div>
<counterContext.Provider value="SOHAIL">

<Parent/>
<Parent2/>
</counterContext.Provider>
</div>

);
}
  
export default App;
