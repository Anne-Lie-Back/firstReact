import React,{ CSSProperties } from "react";
import Layout from './layout'

/* interface Prop { 
    compiler: string; 
    framework: string; 
}; */

//'HelloProps describes the shape of props
//State is never set so we use the '{}' type.
/*  export class Hello extends React.Component<HelloProps> {
    render(){
        return <h1 style = {style}>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}  */

export default function App() {
    return <Layout/>;
} 