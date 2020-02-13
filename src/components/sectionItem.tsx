import React from 'react';

 interface Props { 
    indexImage: string;
    indexTitle: string;
}

export default function SectionItem(props: Props){
   return(
    <div style = {gridItem}>
        <h2 style = {centeredTitle}> {props.indexTitle}</h2>
        <img src = {props.indexImage} style={imageStyle}/>
    </div>
   )
}

const gridItem: React.CSSProperties = {
   display: 'flex',
   justifyContent: 'center',
    position: 'relative',
    height: '100%'
}

const imageStyle: React.CSSProperties ={
    width: '63%',
    objectFit: 'cover',
    margin:'1rem'
}

const centeredTitle: React.CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '0 0 0.5rem black',
    fontSize: '3rem'
}