import logo from './logo.svg';
import React, {useState , useContext} from "react";
import counterContext from './Context';
import './App.css';
import Parent from './Parent';
function App() {
return(

<div>
<counterContext.Provider value="SOHAIL">

<Parent/>

</counterContext.Provider>
</div>

);
}
  
export default App;
