import React from "react";

interface ItemProps {
    id: string;
    onSelect: (id: string) => void;
}

const Item: React.FC<ItemProps> = (props : ItemProps) => {
    const { id, onSelect } = props;
    return <li onClick={() => onSelect(id)}></li>;
};

export default Item;