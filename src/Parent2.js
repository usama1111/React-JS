import React, {useContext} from 'react';
import counterContext from './Context';

const Parent2 = ()=>{

let value = useContext(counterContext);

return(
    <div>
        
My name is {value}

         </div>
);


}
export default Parent2;