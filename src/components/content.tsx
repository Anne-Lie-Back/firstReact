import React from 'react';
import SectionItem from './sectionItem'

export default function Content(){
    return (
        <div style = {gridContainer}>
            <SectionItem/>
            <SectionItem/>
            <SectionItem/>
        </div>
    )
}

const gridContainer: React.CSSProperties = {
    display: 'Grid',
    gridTemplateRows: 'auto',
    height: '100%',
}

