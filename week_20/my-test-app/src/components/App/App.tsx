// import { useState } from "react";

import "./App.css";
import NewsCard from "../NewsCard/NewsCard";
import Button from "../Button/Button";
import Item from "../Item/Item";
import Counter from "../Counter/Counter";
// import Input from "../input/input";

function App() {
    const clickedFunc = () => alert("pressed nbnbnb");
    return (
        <div>
            <NewsCard imgSrc="hello1" title="momo" />
            <NewsCard imgSrc="hello2" title="momo" />
            <NewsCard imgSrc="hello3" title="momo" />

            <Button oneClick={clickedFunc} />
            <ul>
              <Item id="42" onSelect={(id) => console.log("chose", id)}/>
              <Item id="56" onSelect={(id) => console.log("chose", id)}/>
            </ul>
            <Counter/>
        </div>
    );
}

export default App;
