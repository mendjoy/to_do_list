//CSS
import styles from "./App.module.css";
import './App.css';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

//Interface
import { ITask } from "./interfaces/Task";

//Hooks
import { useState } from "react";

function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className="App">

      <Header/>
      <main className={styles.main}>
          <div className={styles.task_form}>
            <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div className={styles.task_list}>
            <h2>Suas Tarefas:</h2>
            <TaskList taskList={taskList}/>
          </div>
      </main>
     
     
     
     <Footer/>
      
    </div>
  );
}

export default App;
