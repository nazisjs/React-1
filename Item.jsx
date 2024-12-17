import React, {Component} from 'react'
export class Item extends Component{
    render(){
        return(
            <div className='item'>
                <img src={'./image/' + this.props.item.img} onClick={() =>this.props.onShowItem(this.props.item)}></img>
                <h2>{this.props.item.title}</h2>
                <h2>{this.props.item.desc}</h2>
                <h2>{this.props.item.price}</h2>
                <h2>{this.props.item.category}</h2>
                <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
            </div>
        )
    }
}