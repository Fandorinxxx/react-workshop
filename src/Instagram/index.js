import React from 'react';
import './styles/main.css';
import { Header } from './components/Header';

import avatar from './assets/images/nasa.jpg';

export const Instagram = () => {
    return (
        <>
            <Header />
            <div className = 'content'>
                <div className = 'profile'>
                    <img
                        alt = 'avatar'
                        className = 'avatar'
                        src = { avatar }
                    />
                </div>
            </div>
        </>
    );
};
