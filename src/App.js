import React, { useState } from "react";
import { sculptureList } from "./data";
import "./App.css";

function App() {
    const [num, setNum] = useState(0);
    const [show, setShow] = useState(false);
    const changeShow = () => setShow(!show);
    const increaseNum = () => {
        return num < 11 ? setNum(num + 1) : 12;
    };
    const decrementNum = () => {
        return num >= 1 ? setNum(num - 1) : 1;
    };
    let info = sculptureList[num];
    return (
        <div className="container">
            <div className="control">
                <button onClick={decrementNum}>Previous</button>
                <button onClick={increaseNum}>Next</button>
            </div>
            <p>{`${num + 1} of ${sculptureList.length}`}</p>
            <h1 className="title">{`${info.name} by ${info.artist}`}</h1>
            <button onClick={changeShow}>
                {show ? "Hide" : "Show"} details
            </button>
            <p className="content">{show && info.description}</p>
            <img src={info.url} alt={info.alt} />
        </div>
    );
}

export default App;
