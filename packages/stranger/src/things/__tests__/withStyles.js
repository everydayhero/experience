import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import withStyles from '../withStyles.js'

const shallow = new ReactShallowRenderer()

describe('comp', () => {
  it('should turn a style object into classes and passes down all styles', () => {
    const styles = ({ props: { makeit = 'red' } }) => ({
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
    const actual = shallow.render(
      <ComponentWithStyles makeit='green' />
    )
    expect(actual.props.classNames).toMatchSnapshot()
    expect(actual.props.styles).toMatchSnapshot()
  })

  it('should make traits available to style objects', () => {
    const styles = ({ traits: { colors } }) => ({
      root: {
        color: colors.green
      },
      child: {
        backgroundColor: colors.theme.soft
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
    const actual = shallow.render(
      <ComponentWithStyles />
    )
    expect(actual.props.classNames).toMatchSnapshot()
    expect(actual.props.styles).toMatchSnapshot()
  })
})
