import addPx from 'add-px-to-style'
import hash from 'murmurhash-js/murmurhash3_gc'

const { floor, random } = Math

export const exists = (v) => (v !== null && typeof v !== 'undefined')
export const isNested = (key) => /\s|:|^@|^\d|^from$|^to$/.test(key)
export const isAnimation = (key) => /^@k/.test(key)
export const isPseudoSelector = (key) => /^:/.test(key)
export const isMediaQuery = (key) => /^@/.test(key)
export const isNotSelector = (key) => /^([0-9]|from|to)/.test(key)
export const isObj = (v) => typeof v === 'object'
export const isArr = (v) => Array.isArray(v)
export const isArrayOrNotObject = (v) => exists(v) && (isArr(v) || !isObj(v))
export const isObjectAndNotArray = (v) => exists(v) && !isArr(v) && isObj(v)
export const parseValue = (prop, val) => typeof val === 'number' ? addPx(prop, val) : val
export const kebab = (key) => key.replace(/([A-Z]|^ms|^webkit)/g, g => '-' + g.toLowerCase())
export const isStyleProp = (key) => !isNested(key)
export const randomHex = () => floor(random() * 16777215).toString(16)
export const hashed = (str) => 'cxsync-' + hash(str, 128)
export const styleReducer = (a, b) => (a.indexOf(b) > -1) ? a : [ ...a, b ]
export const propertyFilter = ({ selector }) => !(/:/.test(selector)) && !(/\s/.test(selector))
export const hasWindow = () => typeof window !== 'undefined'
export const hasDocument = () => typeof document !== 'undefined'
export const isBrowser = (() => hasWindow() && hasDocument() && document.nodeType === 9)()
