const React = require('react')

const MyTitle = React.createClass({
  render () {
    return (
      <div>
        <h1 style = {{color: this.props.color}}>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle

//var MyTitle = React.createClass({
  //render () {
    //const style= {color: this.props.color}
    //return (
      //<div>
        //<h1 style = {style}>
          //{this.props.title}
        //</h1>
      //</div>
    //)
  //}
//})
