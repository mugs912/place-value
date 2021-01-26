import React from "react";
import './TryButton.css'
import losegif from './lose.gif'

export default function TryButton() {

    function displayblock() {
        document.getElementById('try').style.display = "block"
    }

    function displaynone() {
        document.getElementById('try').style.display = "none";
    }

    return (
        <div class='trypopup' id='try'>
            {
                displayblock
            }
            <div>
	            <img className='trysmile' src={losegif} alt='you lose'/>
	            <button className="trybtn" onClick={displaynone} >Try Again</button>
            </div>
        </div>
    );
}
