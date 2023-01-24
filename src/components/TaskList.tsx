import React from 'react'

//Interface
import { ITask } from "../interfaces/Task";

//CSS
import styles from "./TaskList.module.css";

interface Props  {
  taskList: ITask[]
}

function TaskList({taskList}: Props) {


  return (
   <>
   
   {taskList.length > 0 ? (
   taskList.map((task) => (

    <div key={task.id} className={styles.task}>
      <div className={styles.details}>
        <h4>{task.title}</h4>
        <p>Dificuldade: {task.difficulty}</p>
      </div>
      <div className={styles.actions}>
        <i className="bi bi-pencil"></i>
        <i className="bi bi-trash"></i>

      </div>
    </div>
   ))
   ) : (
    <p>Não há Tarefas Cadastradas</p>
   )}
   </>
  )
}

export default TaskList