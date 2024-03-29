import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';

import styles from './App.module.scss';

function App() {

  const [tasks, setTasks] = useState<Array<ITask>>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask (selectedTask: ITask) {
    setSelected(selectedTask);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === selectedTask.id ? true : false
    })));
  }

  function closeTask () {
    if (selected) {
      setSelected(undefined);
      setTasks(oldTasks => 
        oldTasks.map(task =>
          {
            if (task.id === selected.id) {
              return {
                ...task,
                completed: true,
                selected: false
              }
            }
            return task;
          }
        )
      );
    }
  }

  return (
    <div className={styles.AppResizer}> 
      <div className={styles.AppStyle}>

        <Form 
          setTasks={setTasks}
        />

        <List 
          tasks={tasks}
          selectTask={selectTask}
        />

        <Timer 
          selected={selected}
          closeTask={closeTask}
        />

      </div>
    </div>
  );
}

export default App;
