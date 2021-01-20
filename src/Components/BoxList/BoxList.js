import React, { Component } from 'react'
import './BoxList.css'
import Confetti from "react-confetti"
import NextButton from "../NextButton/NextButton";

export default class BoxList extends Component{

    lst = this.props.list
    isWin = -1
    isNext = -1

    state = {
        numberList : [0,1,2,3,4,5,6,7,8,9],
        placeList : [null,null,null,null]
    }

    winnerCelebration(val){
        if(val===1)
            return(
                <>
                    <h2 className='win'>You Win</h2>
                    <Confetti height={1000} width={1500}/>
                </>
            )
        else if(val===0)
            return(
                <h2 className='not-win'>Keep Trying</h2>
            ) 
        else
            return(
                <h2 className='instruction'>Identify Thousand's, Hundred's, Ten's and Unit's place value<br></br> From the above number given in Words and place them in appropriate boxes below</h2>
            )               
    }
    
    showButton(val)
    {
        if(val === 1)
            return(<NextButton/>)
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
            numberList: [],
            placeList: []
        };

        this.state.numberList.map((el,i) => {
            return(
                tasks.numberList.push(
                    <div className='color-dim' key={i} onDragStart = {(e) => this.onDragStart(e,i)} draggable>
                        <h1>{this.state.numberList[i]}</h1>
                    </div>
                )
            );
        }) 

        if(this.state.placeList[0] != null)
            tasks.placeList.push(
                <div key={0} className='first'>
                    <h1 className='place'>Thousand's Place</h1>
                    <div className='inside-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <h1>{this.state.placeList[0]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={0} className='first'>
                    <h1 className='place'>Thousand's Place</h1>
                    <div className='initial-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <h1>{this.state.placeList[0]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[1] != null)
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h1 className='place'>Hundred's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <h1>{this.state.placeList[1]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h1 className='place'>Hundred's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <h1>{this.state.placeList[1]}</h1>
                    </div>
                </div>
            )
    
        if(this.state.placeList[2] != null)
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h1 className='place'>Ten's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <h1>{this.state.placeList[2]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h1 className='place'>Ten's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <h1>{this.state.placeList[2]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[3] != null)
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h1 className='place'>Unit's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <h1>{this.state.placeList[3]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h1 className='place'>Unit's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <h1>{this.state.placeList[3]}</h1>
                    </div>
                </div>
            )    
        
        if(this.state.placeList.filter((item) => item!=null).length === 4 && this.lst.every((li,i) => li===this.state.placeList[i]))
        {
            this.isWin = 1
            this.isNext = 1
        }
        else if(this.state.placeList.filter((item) => item!=null).length === 4)
        {
            this.isWin = 0
            this.isNext = 0
        }

        return(

            <div>
                <>
                    {
                        this.winnerCelebration(this.isWin)
                    }
                </>

                <div className='box'> 
                    {tasks.numberList}
                </div>

                <div className='arrangement'>
                    {tasks.placeList}
                </div>

                {
                    this.showButton(this.isNext)
                }
            </div>
        )
    }
}