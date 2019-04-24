import React from 'react';
import './styles/main.css';
import { Header } from './components/Header';

export const Instagram = () => {
    return (
        <>
            <Header />
            <div className = 'content'>
                <div className = 'profile'>
                    <img
                        alt = 'avatar'
                        className = 'avatar'
                    />
                </div>
            </div>
        </>
    );
};
