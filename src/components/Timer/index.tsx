import Button from "../Button";
import Clock from "./Clock";

import style from './Timer.module.scss';

function Timer () {
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