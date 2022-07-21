import React from 'react';
import Header from "./Header";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <Header>
                <hr/>
            </Header>

            <Outlet/>

            <footer style={{textAlign: 'center'}}>
                <hr/>
                <span>2O_o22</span>
            </footer>
        </>
    );
};

