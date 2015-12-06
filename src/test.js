import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

export default function test(should, callback){
  return Target => {
    describe(`${Target.name}: ${should}`, () => {
      it('', next => {
        const wrapper = shallow(<Target />)
        callback(wrapper, expect)
        next()
      })
    });
  }
}
