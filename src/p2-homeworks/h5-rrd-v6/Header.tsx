import React, {ReactNode, useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import st from './Header.module.css'
import {CustomButton} from "../../UI/CustomButton/CustomButton";

type HeaderPropsType = {
    children: ReactNode
}

function Header(
    {
        children
    }: HeaderPropsType
) {
    const [active, setActive] = useState<boolean>(true)
    const finalClassName = active ? [st.menu, st.active].join(' ') : [st.menu, st.passive].join(' ')
    const onCliclHandler = () => {
        setActive(!active)
    }
    return (
        <>
            <div className={finalClassName}>
                <CustomButton
                    onClick={onCliclHandler}
                    className={st.Btn}
                > {active ? '>>' : '<<'}
                </CustomButton>
                <nav className={st.menulist}>
                    <NavLink
                        to={PATH.PRE_JUNIOR}
                        className={({isActive}) => !isActive ? st.link : `${st.link} ${st.active}`}
                    >PreJunior
                    </NavLink>

                    <NavLink
                        to={PATH.JUNIOR}
                        className={({isActive}) => !isActive ? st.link : `${st.link} ${st.active}`}
                    >Junior
                    </NavLink>

                    <NavLink
                        to={PATH.JUNIOR_PLUS}
                        className={({isActive}) => !isActive ? st.link : `${st.link} ${st.active}`}
                    >Junior+
                    </NavLink>
                </nav>

            </div>

            {
                children
            }

        </>

    )
}

export default Header
