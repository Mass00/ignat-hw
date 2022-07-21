import React from 'react'
import s from './Greeting.module.css'
import {CustomInput} from "../../UI/CustomInput/CustomInput";
import {CustomButton} from "../../UI/CustomButton/CustomButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback(e: React.ChangeEvent<HTMLInputElement>): void  // need to fix any
    addUser(): void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = !error ? s.someClass : s.error  // need to fix with (?:)

    return (
        <div className={s.main}>
            <div className={s.totalUsers}><h2>TotalUsers: {totalUsers}</h2></div>
            <CustomInput error={error} value={name} onChange={setNameCallback} className={inputClass}/>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <CustomButton className={s.btn} onClick={addUser}>add</CustomButton>
            <div style={{color: 'red'}}><span>{error ? error : ''}</span></div>
        </div>
    )
}

export default Greeting
