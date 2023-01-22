import { useState } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import Timer from '../components/Timer';
import { ITask } from '../types/ITask';

import style from './App.module.scss';

function App() {

  const [tasks, useTasks] = useState<Array<ITask>>([]);

  return (
    <div className={style.AppStyle}>
      <Form setTasks={useTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
