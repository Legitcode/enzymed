##enzymed

Decorators and test running for [enzyme](https://github.com/airbnb/enzyme).

```js
import React from 'react'

@test('render the correct text', (wrapper, expect) => expect(wrapper.text()).to.equal('hi'))
export default class Page extends React.Component{
  render(){
    return (
      <div className="cool">hi</div>
    )
  }
}
```
Multiple tests are better written like so:

```js
@test('render the correct text', tests)
export default class Page extends React.Component{
  render(){
    return (
      <div className="cool">hi</div>
    )
  }
}

function tests(wrapper, expect){
  expect(wrapper.text()).to.equal('hi')
  expect(wrapper.find('.cool')).to.ok
}
```

Run tests with `enzymed example/*`

##How it works

This library includes `chai` and `mocha` for you. Makes it super easy to write your tests as you make your components.

##Todo

- remove `@test` declaration when building code.
