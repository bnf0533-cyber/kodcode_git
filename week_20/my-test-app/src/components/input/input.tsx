import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
export default function Input(props: InputProps) {
    const { label, ...rest } = props;

    return (
        <div>
            <label htmlFor={rest.id}> {label} </label>
            <input {...rest} />
        </div>
    );
}
