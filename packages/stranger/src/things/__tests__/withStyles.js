import React from 'react'
import { shallow } from 'enzyme'
import withStyles from '../withStyles.js'

describe('comp', () => {
  it('should turn a style object into classes and passes down all styles', () => {
    const styles = ({ makeit = 'red' }) => ({
      root: {
        color: makeit
      },
      child: {
        backgroundColor: makeit
      }
    })
    const MyComponent = ({
      children,
      classNames
    }) => (
      <div className={classNames.root}>
        <span className={classNames.child}>{children}</span>
      </div>
    )
    const ComponentWithStyles = withStyles(styles)(MyComponent)
    const componentObj = shallow(
      <ComponentWithStyles makeit='green' />
    )
    expect(componentObj.props().classNames).toMatchSnapshot()
    expect(componentObj.props().styles).toMatchSnapshot()
  })

  it('should make traits available to style objects', () => {
    const styles = (props, { color }) => ({
      root: {
        color: color.green
      },
      child: {
        backgroundColor: color.bg.lighter
      }
    })
    const MyComponent = ({
      children,
      classNames
    }) => (
      <div className={classNames.root}>
        <span className={classNames.child}>{children}</span>
      </div>
    )
    const ComponentWithStyles = withStyles(styles)(MyComponent)
    const componentObj = shallow(
      <ComponentWithStyles />
    )
    expect(componentObj.props().classNames).toMatchSnapshot()
    expect(componentObj.props().styles).toMatchSnapshot()
  })
})
