import React, {Dispatch, SetStateAction} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import styles from './Affairs.module.css'
import {CustomButton} from "../../UI/CustomButton/CustomButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: Dispatch<SetStateAction<FilterType>>
    deleteAffairCallback(_id: number): void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={styles.affairs}>
            {mappedAffairs}
            <div className={styles.btn__block}>
                <CustomButton className={styles.btn} onClick={setAll}>All</CustomButton>
                <CustomButton className={[styles.btn,styles.highColor].join(' ')} onClick={setHigh}>High</CustomButton>
                <CustomButton className={[styles.btn,styles.middleColor].join(' ')} onClick={setMiddle}>Middle</CustomButton>
                <CustomButton className={[styles.btn,styles.lowColor].join(' ')} onClick={setLow}>Low</CustomButton>
            </div>
        </div>
    )
}

export default Affairs
