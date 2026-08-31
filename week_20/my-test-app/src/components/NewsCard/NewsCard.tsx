import React from "react";

type NewsCardProps = {
    title: string;
    imgSrc: string
}

function NewsCard(props : NewsCardProps) {
    return <div>{props.title}</div>;
}


export default NewsCard;
