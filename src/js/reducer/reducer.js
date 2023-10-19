
import { ADD_TASK, DELETE_TASK, FILTRE_TASK, UPDATE_TASK} from "../constant/nameAction"

const initialstate = {
    task :[
        {id: 1,
            description:"code",
            isDone: "false"

        } ,
        {id: 2,
            description:"Workout",
            isDone:"true"

        },
        {id: 3,
            description:"upDate",
            isDone:"true"

        },
        {id: 4,
            description:"New task",
            isDone:"false"

        }
    ]
}
const rootreducer = (state=initialstate,action)=>{
   switch (action.type) {
    case ADD_TASK :
        return {
            //ajouter un nouvelle case d'objet dans le tableau "task"
            task :[...state.task , action.payload]

        }

    case FILTRE_TASK :
            return {
                //ouvrir le task et filtrer selon done 
                task:[...state.task.filter((item)=>item.isDone === action.payload)]

            }

    case UPDATE_TASK:
//  affectation de objet dans autre objet en utilisant un nouveau tab
    let data = action.payload ;
     const updatedTab = [] ;
     state.task.map((item)=>{
        if(item.id === data.id){
            item.id = data.id ;
            item.description = data.description;
            item.isDone = data.isDone
        }
        updatedTab.push(item)
     })
   
                

                
    case DELETE_TASK:
                return {
                    // suppresion le case de task selon id 
                    task:[...state.task.filter((item)=>item.id !== action.payload)]

                }
       
   
    default:
        // resultat par defaut  
       return state ;
   }
}
export default rootreducer ;