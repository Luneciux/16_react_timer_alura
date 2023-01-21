import React from "react";
import './style.scss';

function List () {
    const tasks = [{
        task: 'Test',
        time: '02:00::00'
    }, {
        task: 'Javascript',
        time: '01:00::00'
    }, {
        task: 'Typescript',
        time: '01:00:00'
    }]

    return (
        <aside className="taskList">
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li key={index} className="item">
                        <h3>{item.task}</h3>
                        <span>{item.time}</span>    
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default List;