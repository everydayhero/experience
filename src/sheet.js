import assign from 'object-assign'
import {isBrowser} from './utils'

const last = (arr) => arr[arr.length - 1]

const sheetForTag = (tag) => {
  if (tag.sheet) return tag.sheet

  for (let i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i]
    }
  }
}

const isDev = (x => (x === 'development') || !x)(process.env.NODE_ENV)
const isTest = process.env.NODE_ENV === 'test'

const oldIE = (() => {
  if (isBrowser) {
    let div = document.createElement('div')
    div.innerHTML = '<!--[if lt IE 10]><i></i><![endif]-->'
    return div.getElementsByTagName('i').length === 1
  }
})()

const makeStyleTag = () => {
  let tag = document.createElement('style')
  tag.type = 'text/css'
  tag.appendChild(document.createTextNode(''));
  (document.head || document.getElementsByTagName('head')[0]).appendChild(tag)
  return tag
}

export function StyleSheet ({
    speedy = !isDev && !isTest,
    maxLength = (isBrowser && oldIE) ? 4000 : 65000
  } = {}) {
  this.isSpeedy = speedy
  this.sheet = undefined
  this.tags = []
  this.maxLength = maxLength
  this.ctr = 0
}

assign(StyleSheet.prototype, {
  getSheet () {
    return sheetForTag(last(this.tags))
  },
  inject () {
    if (this.injected) throw new Error('already injected stylesheet!')
    if (isBrowser) this.tags[0] = makeStyleTag()
    else {
      this.sheet = {
        cssRules: [],
        insertRule: (rule) => this.sheet.cssRules.push({ cssText: rule })
      }
    }
    this.injected = true
  },
  speedy (bool) {
    if (this.ctr !== 0) {
      throw new Error(`cannot change speedy mode after inserting any rule to sheet. Either call speedy(${bool}) earlier in your app, or call flush() before speedy(${bool})`)
    }
    this.isSpeedy = !!bool
  },
  _insert (rule) {
    try {
      const sheet = this.getSheet()
      sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : sheet.cssRules.length)
    } catch (e) {
      if (isDev) {
        console.warn('Illegal rule inserted', rule) //eslint -disable-line no-console
      }
    }
  },
  insert (rule) {
    if (isBrowser) {
      if (this.isSpeedy && this.getSheet().insertRule) {
        this._insert(rule)
      } else {
        const tag = last(this.tags)
        if (rule.indexOf('@import') !== -1) {
          tag.insertBefore(document.createTextNode(rule), tag.firstChild)
        } else {
          tag.appendChild(document.createTextNode(rule))
        }
      }
    } else {
      this.sheet.insertRule(rule, rule.indexOf('@import') !== -1 ? 0 : this.sheet.cssRules.length)
    }
    this.ctr++
    if (isBrowser && this.ctr % this.maxLength === 0) {
      this.tags.push(makeStyleTag())
    }
    return this.ctr - 1
  },
  flush () {
    if (isBrowser) {
      this.tags.forEach((tag) => tag.parentNode.removeChild(tag))
      this.tags = []
      this.sheet = null
      this.ctr = 0
    } else {
      this.sheet.cssRules = []
    }
    this.injected = false
  },
  rules () {
    if (!isBrowser) {
      return this.sheet.cssRules
    }
    let arr = []
    this.tags.forEach((tag) => arr.splice(arr.length, 0, ...Array.from(sheetForTag(tag).cssRules)))
    return arr
  }
})
