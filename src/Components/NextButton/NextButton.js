import React from "react";
import './NextButton.css'

export default function NextButton() {

    return (
        <div className='btn-div'>
            <button className='btn' onClick={() => {window.location.reload(false)} }>Next Question</button>
        </div>
    );
}
