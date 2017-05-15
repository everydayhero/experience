import React from 'react'
import {Broadcast, Subscriber} from 'react-broadcast'
import reduce from 'lodash/reduce'
import kebabCase from 'lodash/kebabCase'
import isString from 'lodash/isString'
import isNumber from 'lodash/isNumber'
import partial from 'lodash/partial'
import IntlFormat from 'intl-messageformat'
import {countries, currencies} from 'country-data'

const CHANNEL = 'language'
const DEFAULT_LANG = 'en_US'
let customDefaultLanguage = DEFAULT_LANG

export const TranslationProvider = ({
  language,
  defaultLanguage = DEFAULT_LANG,
  children
}) => {
  customDefaultLanguage = defaultLanguage
  return (
    <Broadcast channel={CHANNEL} value={language || customDefaultLanguage}>
      <div>{children}</div>
    </Broadcast>
  )
}

const translated = ({
  translations,
  params = {},
  mapTranslationsToProps = (o) => o,
  format = {}
}) => {
  const warmTranslations = preHeat(translations, format)
  return (Component) => {
    const TranslatedComponent = (props) => (
      <Subscriber channel={CHANNEL}>
        {(language) => <Component {...props}
          {...mapTranslationsToProps(translateWithDefaults({
            translations: warmTranslations,
            language: language || customDefaultLanguage,
            reducer: templateReducer(templateParamValues(props, params))
          }), props)}
        />}
      </Subscriber>
    )
    return TranslatedComponent
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

const templateReducer = (values) => partial(templateIteratee, values)
const templateIteratee = (values, acc, v, k) => {
  if (typeof v === 'object' && !v.format) {
    acc[k] = reduce(v, partial(templateIteratee, values), {})
  } else {
    acc[k] = v.format(values)
  }
  return acc
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
  language,
  reducer
}) => (
  reduce({
    ...translations[customDefaultLanguage],
    ...translations[language]
  }, reducer, {})
)

const getRegionCurrency = (region) => (
  currencies[countries[region].currencies[0]]
)
