const { floor, random } = Math

const isNode = typeof module !== 'undefined' && (!this || this.module !== module)
export const exists = (v) => (v !== null && typeof v !== 'undefined')
export const isValue = (v) => typeof v === 'string' || typeof v === 'number'
export const isNested = (key = '') => /\s|:|^@|^\d|^from$|^to$/.test(key)
export const isKeyframe = (key = '') => key[0] === '@' && key[1] === 'k'
export const isPseudoSelector = (key = '') => key[0] === ':'
export const isMediaQuery = (key = '') => key[0] === '@' && key[1] === 'm'
export const isNotSelector = (key = '') => /^([0-9]|from|to)/.test(key)
export const isObj = (v) => typeof v === 'object'
export const isArr = (v) => Array.isArray(v)
export const isArrayOrNotObject = (v) => exists(v) && (isArr(v) || !isObj(v))
export const isObjectAndNotArray = (v) => exists(v) && !isArr(v) && isObj(v)
export const kebab = (key) => key.replace(/([A-Z]|^ms|^webkit)/g, g => '-' + g.toLowerCase())
export const isStyleProp = (key) => !isNested(key)
export const randomHex = () => floor(random() * 16777215).toString(16)
export const styleReducer = (a, b) => (a.indexOf(b) > -1) ? a : [ ...a, b ]
export const propertyFilter = ({ selector }) => !(/:/.test(selector)) && !(/\s/.test(selector))
export const hasWindow = () => typeof window !== 'undefined'
export const hasDocument = () => typeof document !== 'undefined'
export const isBrowser = (() => !isNode && hasWindow() && hasDocument() && document.nodeType === 9)()
