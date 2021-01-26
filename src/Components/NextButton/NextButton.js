import React from "react";
import './NextButton.css'
import wingif from './win.gif'

export default function NextButton() {

    return (
        <div className='nextpopup'>
	        <h1 className='win'>You Win</h1>
            <div>
	            <img className='nextsmile' src={wingif} alt='you win' />
	            <button className="nextbtn" onClick={() => {window.location.reload(false)}} >Next Level</button>
            </div>
        </div>
    );
}
