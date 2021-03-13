import React, {useReducer} from "react";
import './App.css';
import './'
const initialState = 0;

const reducer = (state, action) => {

if(action.type == "INCREMENT"){

 return state + 1;     }

else if(action.type == "DECREMENT"){

    return state - 1;   }
else if (action.type == "reset"){

return state - state;

}
else{

prompt("Error 404");
}
return state;   
}

 const  App = () =>{

const [state , dispatch] = useReducer(reducer, initialState);
return(

<div className="App">
<p className= "Text"> {state} </p>
<button className="btn" onClick={() => dispatch({type : "INCREMENT"})}> INC </button>
<button className="btn"  onClick={() => dispatch({type : "DECREMENT"})}> DEC </button>
<button  className="btn" onClick={() =>  dispatch({type : "reset"})  } > Reset </button>
<br></br>
<div  className="myDIV">
<h1>Developed By Usama Bantwa </h1>
<h1>    Email: usamasohail1999@gmail.com </h1>
<h1> WhatsApp: +923463000226</h1>
</div>
</div>
); 
}

export default App;

