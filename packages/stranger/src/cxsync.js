import cxsync from '@everydayhero/cxsync'
import React from 'react'
import rug from '@everydayhero/rug'

const stranger = cxsync

export const addRule = stranger
export const renderCssToString = cxsync.getCss
export const ReactStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: renderCssToString() }} />
)
export const resetCache = cxsync.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.ReactStyles = ReactStyles
stranger.resetCache = resetCache
stranger.defaultTraits = rug

export default stranger
