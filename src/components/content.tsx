import React from 'react';
import SectionItem from './sectionItem'

export default function Content(){
    return (
        <div style = {gridContainer}>
            <SectionItem indexImage = "https://source.unsplash.com/1600x300/?animal,cat" indexTitle = 'CAT'/>
            <SectionItem indexImage = "https://source.unsplash.com/1600x300/?animal,dog" indexTitle = 'DOG'/>
            <SectionItem indexImage = "https://source.unsplash.com/1600x300/?animal,horse" indexTitle = 'HORSE'/>
        </div>
    )
}

const gridContainer: React.CSSProperties = {
    display: 'Grid',
    gridTemplateRows: 'auto',
    height: '100%',
}

