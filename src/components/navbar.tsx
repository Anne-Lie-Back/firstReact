import React from 'react';
import Content from './content'

export default function Navbar(){
    return (
        <header style = {headerStyle}>
            <h1>- React Playground -</h1>
        </header>
    );
}

const headerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.6rem',
    color:'black',
    textShadow:'0 0 0.6rem white'
}