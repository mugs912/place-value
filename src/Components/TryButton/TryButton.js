import React from "react";
import './TryButton.css'
import losegif from './lose.gif'

export default function TryButton(props) {

    function displaynone() {
        document.getElementById('try').style.display = "none";
        props.que.style.display = 'block'
    }

    return (
        <div className='trypopup' id='try'>
            <h2 className='not-win'>Keep Trying</h2>
            <div>
	            <img className='trysmile' src={losegif} alt='you lose'/>
	            <button className="trybtn" onClick={displaynone} >Try Again</button>
            </div>
        </div>
    );
}
