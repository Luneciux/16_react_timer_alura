import { useEffect, useState } from "react";
import { ITask } from "../../types/ITask";
import Button from "../Button";
import Clock from "./Clock";

import calcTime from "../../common/utils/date";

import styles from './Timer.module.scss';

interface TimerProps {
    selected: ITask | undefined,
    closeTask: () => void
}

function Timer ({selected, closeTask} : TimerProps) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time){ setTime(calcTime(selected.time)); }
    }, [selected]);

    //RECURSIVA PARA FAZER UM CONTADOR COM UM TIME SPAN
    function countDown (timeSpan: number = 0) {
        setTimeout(() => {
          if(timeSpan > 0){
            setTime(timeSpan - 1);
            return countDown(timeSpan - 1);
          }
          closeTask();
        }, 1000);
      }
    
    return (
        <div className={styles.timer}>
            <p className={styles.title}></p>
            <div className={styles.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button
                onClick={() => {console.log(countDown(time))}}
            >
                Start
            </Button>
        </div>
    )
}

export default Timer;