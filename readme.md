##enzymed

Decorators and test running for [enzyme](https://github.com/airbnb/enzyme).

```js
import React from 'react'
import test from '../src/test'

@test('render the correct text', (wrapper, expect) => {
  expect(wrapper.text()).to.equal('hi')
  expect(wrapper.find('.cool')).to.ok
})
export default class Page extends React.Component{
  render(){
    return (
      <div className="cool">hi</div>
    )
  }
}
```

Run tests with `enzymed example/*`

##Todo

- Remove need to import `test`, do it automatically with a babel plugin
- remove `@test` declaration when building code.
