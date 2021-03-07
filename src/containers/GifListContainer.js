import React, {Component, createContext} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import Gif from '../components/Gif.js'

export default class GiftListContainer extends Component {

  state = {
    query: '',
    gifs: []
  }

  componentDidMount(){
    this.fetchTrending()
  }

  updateQuery = (input) => {
    this.setState({query: input}, () => this.fetchQuery())
  }

  fetchTrending = () => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=scMmCl0cLQ9EdY9PrnC0qyAoaoXH7J4j&limit=3')
      .then(resp => resp.json()).then(json => this.setState({gifs: json.data.map(gif => <Gif url={gif.images.original.url} key={gif.id} alt={gif.title}/> )}))
  }

  fetchQuery = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.query}&api_key=scMmCl0cLQ9EdY9PrnC0qyAoaoXH7J4j&limit=3`)
      .then(resp => resp.json()).then(json => this.setState({gifs: json.data.map(gif => <Gif url={gif.images.original.url} key={gif.id} alt={gif.title}/> )}))
  }

  render(){
    return(
    <div>
      <GifSearch updateQuery={this.updateQuery}/>
      <GifList gifs={this.state.gifs} />
    </div>
    )
  }
}