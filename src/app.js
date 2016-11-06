const React = require('react')
const ReactDOM = require('react-dom')
const Home = require('./Home')
const Search = require('./Search')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const {Router, Route, hashHistory, IndexRoute} = ReactRouter
// const MyTitle = require('./MyTitle')

{/*
  const MyFirstComponent = () => (
    //fat arrow is introduced to get rid of function keyword
    <div>
      <MyTitle title='Props are great' color='rebeccapurple'/>
      <MyTitle title='Props are amazing' color='peru'/>
    </div>
  )
*/}

const App = () => (
// is the same as var App = function() {
// if no logic, AND using fat arrow, can implicitly return.
// if there is logic, must explicitly return.
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Home} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
  // <div className='app-container'>
  // </div>
)

ReactDOM.render(<App/>, document.getElementById('app'))
