'use strict';


import React, {Component} from "react";
import PropTypes from 'prop-types';

export default class AddUser extends  Component{
    static  get propTypes(){
        return {
            addUser: PropTypes.func
        }
    }

    constructor(props){
        super(props);
    }
    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.name=event.target.value;
    }

    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        if(this.name){
            this.props.addUser({name:this.name});
            this.name='';
        }
    }

    render(){
        return <div>
            <from onSubmit={event=>this.onSubmit(event)}>

                <label>UserName111:</label>
             <label>UserNameb1s:</label>

                <input type="text" onChange={event=>this.onNameChange(event)}/>
                <button type="sumbit">Add</button>
            </from>
        </div>
    }

}