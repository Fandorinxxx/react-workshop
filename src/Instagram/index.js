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
                    <div className = 'main'>
                        <span className = 'nickname'>nasa</span>
                    </div>
                </div>
            </div>
        </>
    );
};
