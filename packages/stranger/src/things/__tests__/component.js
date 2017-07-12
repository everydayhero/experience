import React from 'react'
import renderer from 'react-test-renderer'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import comp from '../component.js'

const shallow = new ReactShallowRenderer()

describe('comp', () => {
  it('should allow removing props from output components to avoid warnings', () => {
    const StyledComp = comp(({ props }) => ({
      color: props.makeit || 'red'
    }))('div')
    const component = renderer.create(
      <StyledComp makeit='green' href='https://everydayhero.com' />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should remove props even when they come from a native component', () => {
    const StyledComp = comp(({ props }) => ({
      color: props.makeit || 'red',
      backgroundColor: 'blue'
    }))('div')
    const StyledCompInehrit = comp(({ props }) => ({
      backgroundColor: props.black || 'black'
    }))(StyledComp)
    const actualShallow = shallow.render(
      <StyledCompInehrit black='white' />
    )
    const actualComponent = renderer.create(
      <StyledCompInehrit black='white' />
    )
    const tree = actualComponent.toJSON()
    expect(actualShallow.props).toMatchSnapshot()
    expect(tree).toMatchSnapshot()
  })
})
