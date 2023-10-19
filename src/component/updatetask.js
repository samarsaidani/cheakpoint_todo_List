import {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {UPDATETASK} from "../js/action/action"


const Updatetask = ({Task}) => {
  const res = useSelector((state)=>state.task)
  
const [description, setDesc] = useState('')
const [isDone ,setDone] = useState('');
  const dispatch = useDispatch();
 
 
  return (
    
    <div className='interface2'>
      <h1 >upDate :</h1>
      <div  className='inputup'>
{/* changement contenue de la state  */}
        <input  type='text'  placeholder={Task.description} onChange={(e)=>setDesc(e.target.value)}/>
        <input  type='text' placeholder={Task.isDone} onChange={(e)=>setDone(e.target.value)}/>
        <button className='button' onClick={()=> dispatch(UPDATETASK({id : Task.id , description,isDone}))}> update</button>
      </div>
      
    </div>
  )
}

export default Updatetask


