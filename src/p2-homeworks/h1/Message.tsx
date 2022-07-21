import React from 'react'
import {ImessageData} from './HW1'
import styles from "./Message.module.css"

function Message(props: ImessageData) {
    return (
        <div className={styles.message}>
            <div className={styles.avatar}>
                <img className={styles.avatar__img} src={props.avatar}/>
            </div>
            <div className={styles.container}>
                <div className={styles.container_head}>
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.text__message}><span>{props.message}</span></div>
                </div>
                <div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>

        </div>
    )
}

export default Message
