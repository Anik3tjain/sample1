import {useState} from 'react';

const counterComponent =()=>{
    
      const [counter,setCounter] = useState(0)

      const btnHandler=()=>{
       setCounter(counter+1);
    }

      return(<div>
          <h2>counter : {counter}</h2>
          <h2><button onClick={btnHandler}>Inc counter</button></h2>
      </div>)
}

export default counterComponent;