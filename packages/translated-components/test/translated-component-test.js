import React from 'react'
import {describe, it} from 'mocha'
import assert from 'assert'
import {mount} from 'enzyme'
import includes from 'lodash/includes'
import translated, {LocaleProvider} from '../src'

const Dummy = ({
  title = 'title that should not be seen',
  label = 'label that should not be seen',
  message = 'message that should not be seen',
  id = 'dummyID'
}) => (
  <div id={id}><h1>{title}</h1><h2>{label}</h2><p>{message}</p></div>
)

const translations = {
  en_US: {
    title: 'Welcome {name}',
    label: 'You have {benjamins, number, money} benjamins!',
    message: 'They derk er jerbs!'
  },
  en_AU: {
    title: 'Rippa!',
    label: 'G\'day mate!',
    message: 'How the bloody hell are ya?'
  },
  en_IE: {
    label: 'Fiddle-de-dee putayteh.',
    message: 'Oi\'ve got {numPotatoes, plural, =0 {no putaytehs} =1 {one putayteh} other {# putaytehs}}'
  },
  en_CA: {
    title: 'Look at me, {word}'
  }
}

const params = {
  word: ({word}) => `I HAVE THE BEST WORDS, like: ${word}`
}

describe('Translate', () => {
  const DummyTranslated = translated({translations, params})(Dummy)
  const subject = ({language, ...rest}) => (
    mount(
      <LocaleProvider locale={language} defaultLocale='en_AU'>
        <DummyTranslated {...rest} />
      </LocaleProvider>
    )
  )

  it('passes non-translation props through unaltered', () => {
    assert(subject({id: 'testID'}).find('#testID').length === 1)
  })

  it('passes default (en-AU) translated strings to wrapped components', () => {
    const text = subject({}).text()
    assert(includes(text, translations['en_AU'].title))
    assert(includes(text, translations['en_AU'].label))
    assert(includes(text, translations['en_AU'].message))
  })

  it('passes translated strings alongside default fallbacks to wrapped components', () => {
    const text = subject({language: 'en_IE', numPotatoes: 0}).text()
    assert(includes(text, translations['en_AU'].title))
    assert(includes(text, translations['en_IE'].label))
  })

  it('formats money correctly for the language', () => {
    const text = subject({language: 'en_US', name: 'TestName', benjamins: 8.87654}).text()
    assert(includes(text, 'Welcome TestName'))
    assert(includes(text, 'You have $8.88 benjamins!'))
  })

  it('handles pluralisation', () => {
    const text = subject({language: 'en_IE', numPotatoes: 1}).text()
    assert(includes(text, 'Oi\'ve got one putayteh'))
  })

  it('transforms template params with supplied functions', () => {
    const text = subject({language: 'en_CA', word: 'bigly'}).text()
    assert(includes(text, 'Look at me, I HAVE THE BEST WORDS, like: bigly'))
  })

  it('formats subobjects below the language key', () => {
    const translations = {
      en_AU: {
        subObject: {
          first: 'This is first',
          second: 'This is second'
        },
        otherKey: 'This is a normal key'
      }
    }
    const DummyWrapper = ({
      subObject: {
        first,
        second
      },
      otherKey
    }) => (
      <div>
        <h1>{first}</h1>
        <p>{second}</p>
        <h1>{otherKey}</h1>
      </div>
    )
    const DummyWrapperTranslated = translated({translations})(DummyWrapper)

    const wrapper = mount(
      <LocaleProvider locale='en_AU' defaultLanguage='en_AU'>
        <DummyWrapperTranslated />
      </LocaleProvider>
    )

    assert(wrapper.text().includes(translations['en_AU'].subObject.first))
    assert(wrapper.text().includes(translations['en_AU'].subObject.second))
    assert(wrapper.text().includes(translations['en_AU'].otherKey))
  })

  it('does not break if `format` is a key on a subobject', () => {
    const translations = {
      en_AU: {
        subObject: {
          format: 'This is my format'
        }
      }
    }
    const DummyWrapper = ({
      subObject: {
        format
      }
    }) => (
      <div>{format}</div>
    )
    const DummyTranslated = translated({translations})(DummyWrapper)
    const wrapper = mount(
      <LocaleProvider locale='en_AU' defaultLanguage='en_AU'>
        <DummyTranslated />
      </LocaleProvider>
    )

    assert(wrapper.text().includes(translations['en_AU'].subObject.format))
  })

  it('uses a locally set language prop over the provider language, if set', () => {
    const translations = {
      en_AU: {
        one: 'AUOne',
        two: 'AUTwo'
      },
      en_NZ: {
        one: 'NZOne',
        two: 'NZTwo'
      }
    }
    const Dummy = (props) => (<div>{props.one}{props.two}</div>)
    const DummyTranslated = translated({translations})(Dummy)
    const wrapper = mount(
      <LocaleProvider locale='en_AU' defaultLanguage='en_AU'>
        <DummyTranslated locale='en_NZ' />
      </LocaleProvider>
    )

    assert(wrapper.text().includes(translations['en_NZ'].one))
    assert(wrapper.text().includes(translations['en_NZ'].two))

    assert(!wrapper.text().includes(translations['en_AU'].one))
    assert(!wrapper.text().includes(translations['en_AU'].two))
  })

  it('translates values using the defaultLocale if they are not available on the locale\'s translation map', () => {
    const translations = {
      en_IE: {
        one: 'Hello hello!',
        two: 'Hi hi!'
      },
      en_GB: {
        one: 'Oy mate, pull yer \'ed in!'
      }
    }
    const Dummy = (props) => <div>{props.one}{props.two}</div>
    const DummyTranslated = translated({translations})(Dummy)
    const wrapper = mount(
      <LocaleProvider locale='en_GB' defaultLocale='en_IE'>
        <DummyTranslated />
      </LocaleProvider>
    )

    assert(wrapper.text().includes(translations['en_GB'].one))
    assert(wrapper.text().includes(translations['en_IE'].two))
  })

  it('uses "en_AU" as the default locale if no default locale is set', () => {
    const translations = {
      en_AU: {
        one: 'AUOne',
        two: 'AUTwo'
      },
      en_NZ: {
        one: 'NZOne'
      }
    }
    const Dummy = (props) => <div>{props.one}{props.two}</div>
    const DummyTranslated = translated({translations})(Dummy)
    const wrapper = mount(
      <LocaleProvider locale='en_NZ'>
        <DummyTranslated />
      </LocaleProvider>
    )

    assert(wrapper.text().includes(translations['en_AU'].two))
  })

  it('should execute a custom mapTranslationsToProps to provide interpolated translations, if it exists', () => {
    const translations = {
      en_AU: {
        one: 'AUOne',
        two: 'AUTwo'
      },
      en_NZ: {
        one: 'NZOne'
      }
    }
    const mapTranslationsToProps = (translations, props) => {
      return {
        ...translations,
        three: props.three + ' Extra info!'
      }
    }
    const Dummy = (props) => <div>{props.one}{props.two}{props.three}</div>
    const DummyTranslated = translated({translations, mapTranslationsToProps})(Dummy)
    const wrapper = mount(
      <LocaleProvider locale='en_NZ' defaultLocale='en_AU'>
        <DummyTranslated three='Three' />
      </LocaleProvider>
    )

    assert(wrapper.text().includes('Three Extra info!'))
  })
})
