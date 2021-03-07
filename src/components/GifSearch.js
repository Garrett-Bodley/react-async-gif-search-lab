import React, {Component} from 'react'

export default class GifSearch extends Component{
  state = {
    query: ''
  }

  handleChange = (e) => {
    this.setState({query: e.target.value})
  }

  handleSearch = (e) => {
    e.preventDefault()
    this.props.updateQuery(this.state.query)
  }

  render(){
    return(
      <div style={{display: "block", textAlign: "center"}}>
        <form onSubmit={this.handleSearch}>
          <input type="text" value={this.state.query} onChange={this.handleChange}></input>
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}