import React from 'react';
import Navbar from './navbar'
import Content from './content';

export default function Layout() {
    return (
        <div style= {style}>
            <Navbar/>
            <Content/>
        </div>
    );
}

/* const centeredContent: React.CSSProperties = {
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center',
     height:'100%'
    
} */

const theme: React.CSSProperties = {
     color: 'blueviolet',
     background: 'black'
}

const gridContainer: React.CSSProperties = {
    display: 'grid',
    gridTemplateRows: '8% auto',
    height: '100vh'
}

const style = {...theme, ...gridContainer}