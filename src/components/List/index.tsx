import { ITask } from "../../types/ITask";
import Item from "./Item";
import style from './List.module.scss';

function List ({tasks} : {tasks: Array<ITask>}) {
    return (
        <aside className={style.taskList}>
            <h2>Daily Tasks</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item} 
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;