import * as React from 'react';
import { useSelector ,useDispatch} from "react-redux"
import { FILTRETASK } from '../js/action/action';
import Task from "./task"
import '../style/style.css'




const TaskList =()=>{
    const rest = useSelector((state)=>state.task);

    const [done, setDone] = React.useState('');
   
    const dispatch= useDispatch()


    console.log(done)
//filtration selon l'etat de done "true "
    const DoneTrue =()=>{
        return (
            <div className="model">
            {rest.filter((item)=>item.isDone === "true").map((El,index)=>{
            return( 
            <div >
                <Task task={El} key={index}/>
                
                <br></br>
            </div>
            )
           
        }) }
           

        </div>
        )
    }
//filtration selon l'etat de done "false "
    const DoneFalse =()=>{
        return (
            <div className="model">
            {rest.filter((item)=>item.isDone === "false").map((El,index)=>{
            return( 
            <div >
                <Task task={El} key={index}/>
                
                <br></br>
            </div>
            )
           
        }) }
           

        </div>
        )
    }
    
    
    return(
        <>
        <div>
            {/* liste des choix de filtration  */}
        <select onChange={(event)=>setDone(event.target.value)}>
          <option></option>
          <option value="true">true</option>
          <option value="false">false</option>
        </select>
        <button  className='button' onClick={()=>dispatch(FILTRETASK(done))}>Filter</button>
      </div>
     
        <div className="model">
              
              
            {rest.map((El,index)=>{
            return(
                // affichage selon done dans les 3 cas 
              
            <div>
                {(done === "true")? DoneTrue(): (done ==="false") ? DoneFalse() : <Task task={El} key={index}/>
                
                } 
                
            </div>
            )
           
        }) }
           

        </div>
        </>
    )
}
export default TaskList