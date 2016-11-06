const React = require('react')
const ShowCard = require('./ShowCard')
const data = require('../public/data')

const Search = React.createClass({
  getInitialState () {
    return {
      searchTerm: ''
    }
  },
  handleSearchTermChange (event) {
    this.setState({
      searchTerm: event.target.value
    })
  },
  render () {
    return (
      // <div className='app-container'>
      //   <h1>New View</h1>
      // </div>
      // <pre><code>
      //   {JSON.stringify(data, null, 4)}
      // </code></pre>
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>BVideos</h1>
          <input value={this.state.searchTerm} type='search' className='search-input' placeholder='Search' onChange={this.handleSearchTermChange}/>
        </header>
        <div className='shows'>
          {data.shows.filter((show) => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map((show) => (
              <ShowCard show={show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
})

module.exports = Search