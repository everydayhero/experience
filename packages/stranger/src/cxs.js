import cxs from 'cxs/monolithic'
import pipe from 'lodash/fp/pipe'
import merge from 'lodash/merge'
import React from 'react'
import rug from '@edh/rug'

//  TODO: Add prefixer to only rule output not classes

const mergeStyles = (...styles) => styles.length === 1
  ? styles[0]
  : merge(...styles)

const stranger = cxs

export const addRule = pipe(mergeStyles, cxs)

export const renderCssToString = cxs.getCss
export const ReactStyles = () => (
  <style dangerouslySetInnerHTML={{__html: renderCssToString()}} />
)

export const resetCache = cxs.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.ReactStyles = ReactStyles
stranger.resetCache = resetCache
stranger.defaultTraits = rug

export default stranger
