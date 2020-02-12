import React,{ CSSProperties } from "react";

interface Prop { 
    compiler: string; 
    framework: string; 
};

//'HelloProps describes the shape of props
//State is never set so we use the '{}' type.
/*  export class Hello extends React.Component<HelloProps> {
    render(){
        return <h1 style = {style}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}  */

 export default function App(props:Prop){
    return (
        <h1 style = {style}>
            Hello from {props.compiler} and {props.framework}!
        </h1>
    )
} 

const centeredContent: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%'
    
}

const theme: React.CSSProperties = {
    color: 'blueviolet',
    
 
}

const style = {...centeredContent, ...theme}