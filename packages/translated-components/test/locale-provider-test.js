import React, { Component } from 'react'
import {describe, it} from 'mocha'
import assert from 'assert'
import {mount} from 'enzyme'

import translated, {LocaleProvider} from '../src'

class UpdateBlocker extends Component {
  shouldComponentUpdate() {
    return false
  }

  render () {
    return this.props.children
  }
}

const translations = {
  en_AU: {
    one: 'One',
    two: 'Two',
    three: 'Three'
  },
  fr_FR: {
    one: 'Un',
    two: 'Deux',
    three: 'Trois'
  }
}

const TestComponent = ({one, two, three}) => <div>{[one, two, three].join(' ')}</div>

describe('LocaleProvider locale context manager', () => {
  it('should provide a locale to a TranslatedComponent', () => {
    const TranslatedTestComponent = translated({translations})(TestComponent)

    const wrapper = mount(
      <LocaleProvider locale='fr_FR' defaultLocale='en_AU'>
        <TranslatedTestComponent />
      </LocaleProvider>
    )

    assert(wrapper.text() === 'Un Deux Trois')
  })

  it('should propagate locale changes', () => {
    const TranslatedTestComponent = translated({translations})(TestComponent)

    const wrapper = mount(
      <LocaleProvider locale='fr_FR' defaultLocale='en_AU'>
        <TranslatedTestComponent />
      </LocaleProvider>
    )

    assert(wrapper.text() === 'Un Deux Trois')

    wrapper.setProps({
      locale: 'en_AU',
      defaultLocale: 'en_AU'
    })

    assert(wrapper.text() === 'One Two Three')
  })

  it('should propagate locale changes even if a component blocks shouldComponentUpdate', () => {
    const TranslatedTestComponent = translated({translations})(TestComponent)

    const wrapper = mount(
      <LocaleProvider locale='fr_FR' defaultLocale='en_AU'>
        <UpdateBlocker>
          <TranslatedTestComponent />
        </UpdateBlocker>
      </LocaleProvider>
    )

    assert(wrapper.text() === 'Un Deux Trois')

    wrapper.setProps({
      locale: 'en_AU',
      defaultLocale: 'en_AU'
    })

    assert(wrapper.text() === 'One Two Three')
  })
})