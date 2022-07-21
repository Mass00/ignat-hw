import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import Junior from "./pages/Junior";
import {Layout} from "./Layout";
import JuniorPlus from "./pages/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: 'junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}

function Pages() {
    return (
        <>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<PreJunior/>}/>
                    <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                    <Route path={PATH.JUNIOR} element={<Junior/>}/>
                    <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                    // add routes
                    {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                    <Route path={'/*'} element={<Error404/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default Pages
