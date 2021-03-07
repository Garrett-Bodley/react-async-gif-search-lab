import React, {Component} from 'react'
import GifListContainer from '../containers/GifListContainer'
import NavBar from './NavBar'

// the App component should render out the GifListContainer component 


export default class App extends Component{

  render(){
    return (
      <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer/>
      </div>
    )
  }
}