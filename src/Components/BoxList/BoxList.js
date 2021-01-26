import React, { Component } from 'react'
import './BoxList.css'
import logo0 from './0.jpg'
import logo1 from './1.jpg'
import logo2 from './2.jpg'
import logo3 from './3.jpg'
import logo4 from './4.jpg'
import logo5 from './5.jpg'
import logo6 from './6.jpg'
import logo7 from './7.jpg'
import logo8 from './8.jpg'
import logo9 from './9.jpg'
import Confetti from "react-confetti"
import NextButton from "../NextButton/NextButton";
import TryButton from "../TryButton/TryButton";

export default class BoxList extends Component{

    lst = this.props.list
    isWin = -1
    count = 0
    imgList = [logo0,logo1,logo2,logo3,logo4,logo5,logo6,logo7,logo8,logo9]

    state = {
        numberList : [0,1,2,3,4,5,6,7,8,9],
        placeList : [null,null,null,null],
    }

    winnerCelebration(val){
        if(val===1)
        {
            document.getElementById('question').style.display = 'none'
            return(
                <>
                    <Confetti height={500} width={1200}/>
                    <NextButton/>
                </>
            )
        }
        else if(val===0)
        {
            document.getElementById('question').style.display = 'none'
            return(
                <>
                    <h2 className='not-win'>Keep Trying</h2>
                    <TryButton que={document.getElementById('question')}/>
                </>
            ) 
        }
        if(this.count === 0)
        {
            return(
                <h2 className='instruction'>Identify Thousand's, Hundred's, Ten's and Unit's place value<br></br> From the above number given in Words and place them in appropriate boxes below</h2>
            ) 
        } 
        if(this.count > 0)
            return(
                <h2 className='not-win'>Keep Trying</h2>
            )          
    }
    
    onDragStart(ev, id){
        ev.dataTransfer.setData("drag", id)
    }

    onDragOver(ev) {
        ev.preventDefault()  
    }

    onDrop(ev,id) {
        let place = this.state.placeList
        let drag = ev.dataTransfer.getData("drag")
        place[id] = this.state.numberList[drag]
        this.setState({
            placeList : place
        })
    }

    render(){
        var tasks = {
            imgList : [],
            placeList: []
        };

        this.imgList.map((el,i) => {
            return(
                tasks.imgList.push(
                    <div className='color-dim' key={i} onDragStart = {(e) => this.onDragStart(e,i)} draggable>
                        <img src={this.imgList[i]} alt='number'/>
                    </div>
                )
            );
        }) 

        if(this.state.placeList[0] != null)
            tasks.placeList.push(
                <div key={0} className='first'>
                    <h2 className='place'>1000's Place</h2>
                    <div className='inside-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <img src={this.imgList[this.state.placeList[0]]} alt='number'/>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={0} className='first'>
                    <h2 className='place'>1000's Place</h2>
                    <div className='initial-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <h1>{this.state.placeList[0]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[1] != null)
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h2 className='place'>100's Place</h2>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <img src={this.imgList[this.state.placeList[1]]} alt='number'/>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h2 className='place'>100's Place</h2>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <h1>{this.state.placeList[1]}</h1>
                    </div>
                </div>
            )
    
        if(this.state.placeList[2] != null)
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h2 className='place'>10's Place</h2>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <img src={this.imgList[this.state.placeList[2]]} alt='number'/>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h2 className='place'>10's Place</h2>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <h1>{this.state.placeList[2]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[3] != null)
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h2 className='place'>1's Place</h2>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <img src={this.imgList[this.state.placeList[3]]} alt='number'/>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h2 className='place'>1's Place</h2>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <h1>{this.state.placeList[3]}</h1>
                    </div>
                </div>
            )    
        
        if(this.state.placeList.filter((item) => item!=null).length === 4 && this.lst.every((li,i) => li===this.state.placeList[i]))
        {
            this.isWin = 1
        }
        else if(this.state.placeList.filter((item) => item!=null).length === 4 && this.count === 0 )
        {
            this.isWin = 0
            this.count++
        }
        else
            this.isWin = -1

        return(
            <div>
                {
                    this.winnerCelebration(this.isWin)
                }

                <div id='question'>
                    <div className='box'> 
                        {tasks.imgList}
                    </div>

                    <div className='arrangement'>
                        {tasks.placeList}
                    </div>
                </div>
            </div>
        )
    }
}