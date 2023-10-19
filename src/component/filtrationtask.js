import * as React from 'react';

import { useDispatch } from 'react-redux';
import { FILTRETASK } from '../js/action/action';

const Filtration =()=>{
    const [done, setDone] = React.useState('');
   
    const dispatch= useDispatch()

  
    console.log(done)
    
    return(
      
      <div className='filtr'>
        <select onChange={(event)=>setDone(event.target.value)}>
          <option></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button className='button' onClick={()=>dispatch(FILTRETASK(done))}>Filter</button>
      </div>
    )
}
export default Filtration



  


  
      
   
