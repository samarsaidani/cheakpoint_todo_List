import { useState } from "react"
import { useDispatch } from "react-redux"
import { ADDTASK } from "../js/action/action"
import { AddCircleOutline } from "@mui/icons-material"

const AddTask =()=>{

    const[disc ,setDisc]=useState('')
    const[done ,setDone]=useState('')
    const dispatch= useDispatch()
    return (
       
            <div className="add">
            <input type="text"  className="input" onChange={(event)=>setDisc(event.target.value)} placeholder="your description"/>
            <input type="text" className="input2" onChange={(event)=>setDone(event.target.value)} placeholder="true/false"/>
            <div className="btn">
        <button className="button" onClick={()=>dispatch(ADDTASK({id:Date.now,description:disc,isDone:done}))}>  <AddCircleOutline/></button></div>
       
        </div>
        
      
    )
}
export default AddTask