/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Search = require('../src/Search')
/*const ShowCard = require('../src/ShowCard')*/
const { shallow } = require('enzyme')
const { shows } = require('../public/data')

describe('<Search />', () => {
  it ('should render the brand', () => {
    const wrapper = shallow(<Search />)
    console.log(wrapper.debug())
    expect (wrapper.contains(<h1 className='brand'>BVideos</h1>)).to.be.true
  })
  xit ('should pass', () => {
    expect (1 + 1 === 2).to.be.true
  })
  it ('should pass', () => {
    expect (1 + 1 === 2).to.be.true
  })
})
