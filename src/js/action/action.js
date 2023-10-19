import { ADD_TASK, DELETE_TASK, FILTRE_TASK, UPDATE_TASK } from "../constant/nameAction"


export const ADDTASK =(payload)=>{
    return{
        type:ADD_TASK,
    payload 
    }
    
}
export const FILTRETASK=(payload)=>{
    return{
        type:FILTRE_TASK,
    payload 
    }
    
}
export const UPDATETASK=(payload)=>{
    return{ 
        type :UPDATE_TASK ,
        payload
        
    }
}
export const DELETETASK =(payload)=>{
    return{
        type : DELETE_TASK ,
        payload
    }
}