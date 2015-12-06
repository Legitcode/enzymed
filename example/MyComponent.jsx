import React from 'react'
import test from '../src/test'

@test('render the correct text', (wrapper, expect) => {
  expect(wrapper.text()).to.equal('hi')
})
export default class Page extends React.Component{
  render(){
    return (
      <div>hi</div>
    )
  }
}
