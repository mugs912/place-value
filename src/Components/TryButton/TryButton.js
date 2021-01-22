import React from "react";
import './TryButton.css'

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
	            <div className='trysmile'>&#128528;</div>
	            <button className="trybtn" onClick={displaynone} >Try Again</button>
            </div>
        </div>
    );
}
