import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';
import { render } from '@testing-library/react';



class Avatar extends Component{

    constructor(){
        super();
        this.state={
            name:"Welcome to the Avatar World"
        }
    }

    nameChange(){
        this.setState({
            name:"Company's Employee Profile"
        })
    }
    

    render(){
         
        const avatarlistarray = [
            {
                id: 1,
                name: "Nikhil",
                work: "Web Developer"
            },
            {
                id: 2,
                name: "Ashish",
                work: "Android Developer"
            },
            {
                id: 3,
                name: "Advik",
                work: "Backend"
            },
            {
                id: 4,
                name: "Raghav",
                work: "Database"
            },
    
        ]
    
        const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
            return <Avatarlist key={i} id={avatarlistarray[i].name} name={avatarlistarray[i].name} work={avatarlistarray[i].work} />
        })
        return (<div className="mainpage">
        <h1>{this.state.name}</h1>
        {arrayavatarcard}
        
        
        <button onClick={()=>this.nameChange()}>Subscribe</button>
    </div>
    )

    }
}

    



   

export default Avatar;