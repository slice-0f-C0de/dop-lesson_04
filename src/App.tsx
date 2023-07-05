import React, {useState} from 'react';
import './App.css';
import SuperButton from "./SuperButton";

function App() {
    return (
        <div>
            <SuperButton callback={() => {}} color={"red"} />
        </div>
    );
}

export default App;
