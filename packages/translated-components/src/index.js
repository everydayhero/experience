import React from 'react'
import reduce from 'lodash/reduce'
import kebabCase from 'lodash/kebabCase'
import isString from 'lodash/isString'
import isNumber from 'lodash/isNumber'
import IntlFormat from 'intl-messageformat'
import { countries, currencies } from 'country-data'
import { Broadcast, Subscriber } from 'react-broadcast'

export const LocaleProvider = ({
  locale,
  defaultLocale = 'en_AU',
  children
}) => (
  <Broadcast
    value={{locale, defaultLocale}}
    channel='providedLocale'
    children={children}
  />
)

const translated = ({
  translations,
  params = {},
  mapTranslationsToProps = (o) => o,
  format = {}
}) => {
  const warmTranslations = preHeat(translations, format)
  return (Component) => {
    return (props) => {
      return (
        <Subscriber channel='providedLocale'>
          {(providedLocale) => {
            const {locale, defaultLocale} = providedLocale
            return (
              <Component
                {...props}
                {...mapTranslationsToProps(translateWithDefaults({
                  translations: warmTranslations,
                  locale: props.locale || locale || defaultLocale,
                  defaultLocale,
                  reducer: templateReducer(templateParamValues(props, params))
                }), props)}
              />
            )
          }}

        </Subscriber>
      )
    }
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
}) => {
  if (!defaultLocale) {
    throw new Error('Translated Component must be rendered inside of a LocaleProvider')
  }

  return reduce({
    ...translations[defaultLocale],
    ...translations[locale]
  }, reducer, {})
}

const getRegionCurrency = (region) => (
  currencies[countries[region].currencies[0]]
)
