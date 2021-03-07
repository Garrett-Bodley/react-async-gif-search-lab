import React, {Component} from 'react'

export default class Gif extends Component{

  render(){
    return(
      <li>
        <img src={this.props.url} alt={this.props.alt}></img>
      </li>
    )
  }
}