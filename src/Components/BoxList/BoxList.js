import React, {Component} from 'react';
import './BoxList.css';

export default class BoxList extends Component{

    state = {
        numberList : this.props.list,
        placeList : [null,null,null,null]
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
    
        return(
            <div>
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