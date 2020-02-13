import React from 'react';

/* interface Props { 
    id: string
};  */

interface Cats{
 id:number = 1,
}

interface Dogs{

}

interface Horses{

}

export default function SectionItem(){
    const imageSrc = 'https://source.unsplash.com/1600x300/?animal,cat';
   return(
    <div style = {gridItem}>
        <h2 style = {centeredAbsolute}> CAT </h2>
        <img src = {imageSrc} style={fullscreen}/>
    </div>
   )
}

const gridItem: React.CSSProperties = {
   display: 'flex',
   justifyContent: 'center',
    position: 'relative',
    height: '100%'
}

const fullscreen: React.CSSProperties ={
    width: '63%',
    objectFit: 'cover',
    margin:'1rem'
}

const centeredAbsolute: React.CSSProperties = {
    position: 'absolute',
    margin: 0,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    textShadow: '0 0 0.5rem black',
    fontSize: '8rem'
}

const styleSectionItem = {...centeredAbsolute, ...gridItem}