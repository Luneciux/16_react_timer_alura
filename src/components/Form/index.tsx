import React, { useState } from "react";
import Button from "../Button";
import { ITask } from "../../types/ITask";
import {v4 as uuidv4} from 'uuid';

import style from './Form.module.scss';

interface FormProps {
    setTasks: React.Dispatch<React.SetStateAction<Array<ITask>>>,

}

function Form ({ setTasks } : FormProps) {

    const [task, setTask] = useState("");
    const [time, setTime] = useState("00:00");

    function addTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTasks(oldTasks => 
            [
                ...oldTasks, 
                { 
                    task,
                    time,
                    selected: false,
                    completed: false, 
                    id: uuidv4()
                }
            ]
        )

        setTask("");
        setTime("00:00");
    }


    return (
        <form className={style.newTask} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add some task
                </label>
                <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Some task"
                    value={task}
                    required
                    onChange={e => setTask(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input 
                    type="time"
                    step="1"
                    name="time"
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    value={time}
                    required
                    onChange={e => setTime(e.target.value)}
                />
            </div>
            <Button type="submit">
                Add
            </Button>
        </form>
    )
}

export default Form;