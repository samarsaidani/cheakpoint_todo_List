
import TaskList from "./component/Tasklist";
import AddTask from "./component/addtask";

import Main from "./component/main";






function App() {
  return (
    <div className="App">
      <Main/>
      <div className="interface">
      <AddTask/><br></br>
      
      <TaskList/><br></br>
      
      </div>
    
    </div>
  );
}

export default App;
