//CSS
import styles from "./App.module.css";
import './App.css';

//components
import Footer from './components/Footer';
import Header from './components/Header';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

//Interface
import { ITask } from "./interfaces/Task";

//Hooks
import { useState } from "react";


function App() {

  const [taskList, setTaskList] = useState<ITask[]>([]);

  const deleteTask = (id:number) => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display:boolean) => {
    const modal = document.querySelector("#modal")

    if(display){
      modal!.classList.remove("hide")
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = ():void => {
    hideOrShowModal(true)

  }

  return (
    <div className="App">
      <Modal children={<TaskForm btnText="Editar Tarefa" taskList={taskList}/>}/>
      <Header/>
      <main className={styles.main}>
          <div className={styles.task_form}>
            <TaskForm btnText="Criar Tarefa" taskList={taskList} setTaskList={setTaskList}/>
          </div>
          <div className={styles.task_list}>
            <h2>Suas Tarefas:</h2>
            <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask}/>
          </div>
      </main>
     
     
     
     <Footer/>
      
    </div>
  );
}

export default App;
