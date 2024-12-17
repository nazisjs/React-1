import React, { Component } from "react";
import {FaTrash} from 'react-icons/fa'
export class Order extends Component{
    render(){
        return(
            <div className="item">
                <img src={'./image/' + this.props.item.img}></img>
                <h2>{this.props.item.title}</h2>
                <h2>{this.props.item.price}</h2>
                <FaTrash className="delete-icon" onClick={()=>this.props.onDelete(this.props.item.id)}/>
            </div>
        )
    }
}
export default Order;