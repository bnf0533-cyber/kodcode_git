import React from "react";
import './Button.css';
interface ButtonProps {
    oneClick : () => void
}
export default function Button(props : ButtonProps) {
    return <div onClick={props.oneClick}></div>;
}
