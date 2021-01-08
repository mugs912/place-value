import React, {Component} from 'react';
import './BoxList.css';
import Confetti from "react-confetti";

export default class BoxList extends Component{

    lst = [null,null,null,null];
    isWin = -1

    state = {
        numberList : this.props.list,
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
    }
    
    onDragStart(ev, id){
        ev.dataTransfer.setData("drag", id);
    }

    onDragOver(ev,) {
        ev.preventDefault();  
    }

    onDrop(ev,id) {
        let number = this.state.numberList
        let place = this.state.placeList
        let drag = ev.dataTransfer.getData("drag");
        place[id] = number[drag]
        this.lst[drag] = number[drag]
        number[drag]=null
        this.setState({
            numberList : number,
            placeList : place
        })
    }

    render(){
        var tasks = {
            numberList: [],
            placeList: []
        };

        this.state.numberList.map((el,i) => {
            if(this.state.numberList[i]==null)
                return(
                    tasks.numberList.push(
                        <div className='color-white' key={i} onDragStart = {(e) => this.onDragStart(e,i)} draggable>
                            <h1>{this.state.numberList[i]}</h1>
                        </div>
                    )
                );
            else
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
                    <h1>Thousand's Place</h1>
                    <div className='inside-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <h1>{this.state.placeList[0]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={0} className='first'>
                    <h1>Thousand's Place</h1>
                    <div className='initial-div' onDragOver={(e) => this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,0)}>
                        <h1>{this.state.placeList[0]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[1] != null)
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h1>Hundred's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <h1>{this.state.placeList[1]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={1} className='margin'>
                    <h1>Hundred's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,1)}>
                        <h1>{this.state.placeList[1]}</h1>
                    </div>
                </div>
            )
    
        if(this.state.placeList[2] != null)
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h1>Ten's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <h1>{this.state.placeList[2]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={2} className='margin'>
                    <h1>Ten's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,2)}>
                        <h1>{this.state.placeList[2]}</h1>
                    </div>
                </div>
            )
        
        if(this.state.placeList[3] != null)
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h1>Unit's Place</h1>
                    <div className='inside-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <h1>{this.state.placeList[3]}</h1>
                    </div>
                </div>
            )
        else
            tasks.placeList.push(
                <div key={3} className='last'>
                    <h1>Unit's Place</h1>
                    <div className='initial-div' onDragOver={(e)=>this.onDragOver(e)} onDrop={(e)=> this.onDrop(e,3)}>
                        <h1>{this.state.placeList[3]}</h1>
                    </div>
                </div>
            )    
        
        if(this.state.numberList.every((li) => li==null) && this.lst.every((li,i) => li===this.state.placeList[i]))
        {
            this.isWin = 1
        }
        else if(this.state.numberList.every((li) => li==null))
        {
            this.isWin = 0
        }

        return(

            <div>
                <p>
                    {
                        this.winnerCelebration(this.isWin)
                    }
                </p>

                <div className='box'> 
                    {tasks.numberList}
                </div>

                <div className='arrangement'>
                    {tasks.placeList}
                </div>
            </div>
        );
    }
}