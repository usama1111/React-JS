import React, {useContext} from 'react';
import counterContext from './Context';


const Parent = () =>{

    let value = useContext(counterContext);
return(

<div> 


<h1> usama {value}</h1>


</div>
);


}

export default Parent;