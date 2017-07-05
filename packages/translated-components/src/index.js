import React from 'react'
import PropTypes from 'prop-types'
import reduce from 'lodash/reduce'
import kebabCase from 'lodash/kebabCase'
import isString from 'lodash/isString'
import isNumber from 'lodash/isNumber'
import IntlFormat from 'intl-messageformat'
import {countries, currencies} from 'country-data'

export class LocaleProvider extends React.Component {
  getChildContext () {
    return {
      locale: this.props.locale,
      defaultLocale: this.props.defaultLocale || 'en_AU'
    }
  }

  render () {
    return <div>{this.props.children}</div>
  }
}
LocaleProvider.childContextTypes = {
  locale: PropTypes.string,
  defaultLocale: PropTypes.string
}

const withLocale = (Component) => {
  const LocaleConsumer = (props, context) => <Component {...context} {...props} />
  LocaleConsumer.contextTypes = {
    locale: PropTypes.string,
    defaultLocale: PropTypes.string
  }
  return LocaleConsumer
}

const translated = ({
  translations,
  params = {},
  mapTranslationsToProps = (o) => o,
  format = {}
}) => {
  const warmTranslations = preHeat(translations, format)
  return (Component) => {
    const TranslatedComponent = ({locale, defaultLocale, ...props}) => {
      return <Component {...props}
        {...mapTranslationsToProps(translateWithDefaults({
          translations: warmTranslations,
          locale: locale || defaultLocale,
          defaultLocale,
          reducer: templateReducer(templateParamValues(props, params))
        }), props)}
      />
    }
    return withLocale(TranslatedComponent)
  }
}

export default translated

const moneyFormat = (language) => ({
  number: {
    money: {
      style: 'currency',
      currency: getRegionCurrency(language.slice(-2)).code,
      minimumFractionDigits: 0
    }
  }
})

const preHeat = (translations, format) => (
  reduce(translations, (acc, o, language) => {
    acc[language] = preheatValues(o, format, language)
    return acc
  }, {})
)

const preheatValues = (obj, format, language) => {
  return reduce(obj, (acc, value, key) => {
    if (typeof value === 'object') {
      acc[key] = preheatValues(value, format, language)
    } else {
      acc[key] = new IntlFormat(value, kebabCase(language), {...moneyFormat(language), ...format})
    }
    return acc
  }, {})
}

const templateReducer = (values) => (acc, v, k) => {
  if (v instanceof IntlFormat) {
    acc[k] = v.format(values)
    return acc
  }
  if (typeof v === 'object') {
    acc[k] = reduce(v, templateReducer(values), {})
    return acc
  }
  throw new Error('Template reducer expects IntlFormat instances as values')
}

const paramClone = (o) => reduce(o, (acc, v, k) => {
  if (isString(v) || isNumber(v)) acc[k] = v
  return acc
}, {})

const templateParamValues = (props, params) => (
  reduce(params, (acc, fn, k) => {
    acc[k] = fn(props)
    return acc
  }, paramClone(props))
)

const translateWithDefaults = ({
  translations = {},
  locale,
  defaultLocale,
  reducer
}) => (
  reduce({
    ...translations[defaultLocale],
    ...translations[locale]
  }, reducer, {})
)

const getRegionCurrency = (region) => (
  currencies[countries[region].currencies[0]]
)
