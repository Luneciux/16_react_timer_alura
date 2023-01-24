import { ITask } from "../../types/ITask";
import { useState } from "react";
import Button from "../Button";
import Clock from "./Clock";

import calcTime from "../../common/utils/date";

import style from './Timer.module.scss';

interface TimerProps {
    selected: ITask | undefined,
}

function Timer ({selected} : TimerProps) {

    const [time, setTime] = useState<number>();

    if(selected?.time){
        setTime(calcTime(selected?.time));
    }
    
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie a contagem</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Start
            </Button>
        </div>
    )
}

export default Timer;