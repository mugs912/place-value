import React from "react";
import './NextButton.css'

export default function NextButton() {

    return (
        <div class='nextpopup'>
            <div>
	        <h1 className='win'>You Win</h1>
	        <div className='nextsmile'>&#128512;</div>
	        <button className="nextbtn" onClick={() => {window.location.reload(false)}} >Next Level</button>
            </div>
        </div>
    );
}
