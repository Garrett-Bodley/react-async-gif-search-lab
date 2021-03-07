import React, {Component} from 'react'

export default class GifList extends Component{

  render(){
    return(
      <ul>
        {this.props.gifs}
      </ul>
    )
  }
}