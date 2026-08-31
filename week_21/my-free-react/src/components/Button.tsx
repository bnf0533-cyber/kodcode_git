import React from "react";
type ButtonProps = {
    onClick : () => void;
    label : string
    user : {
        username : string
        phone : string
    }
}

export default function Button(props : ButtonProps) {
    // const conte
    console.log("render");
    return <div onClick={props.onClick}>{props.label}, {props.user.username}</div>;
}
