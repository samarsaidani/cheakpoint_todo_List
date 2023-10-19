import { useState } from 'react'
import { useDispatch } from 'react-redux'
import '../style/style.css'
import Updatetask from './updatetask'
import { BorderColor, Delete } from '@mui/icons-material'
import { DELETETASK } from '../js/action/action'




const  Task =({task})=>{

    const dispatch= useDispatch()
    const [toggle,setToggle] = useState(false);// nouvelle variable l'etat de la boutton 
   
    return (
        <div>
            <div className="task">
                {/* forme de la task  */}
                <h3 className='h3'>{task.description}</h3>
                <div className='boutton'>
                <button className='button' onClick={()=>setToggle(!toggle)} ><BorderColor/></button>
                <button className='button' onClick={()=>dispatch(DELETETASK(task.id))} ><Delete/></button>
                {toggle ? <Updatetask Task ={task}/> : null}
                </div>
              
            </div>
        

        </div>
    )
}
export default Task 