import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback(_id: number): void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => { props.deleteAffairCallback(props.affair._id) }// need to fix
    let temp = styles.all;
    if(props.affair.priority === 'high') temp = styles.high
    if(props.affair.priority === 'middle') temp = styles.middle

    return (
        <div className={`${styles.affair} ${temp}`}>
            {props.affair.name}
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
