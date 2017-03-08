import cxsync from 'cxsync'
import React from 'react'
import rug from '@edh/rug'

const stranger = cxsync

export const addRule = stranger
export const renderCssToString = () => cxsync.css
export const ReactStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: renderCssToString() }} />
)
export const resetCache = () => cxsync.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.ReactStyles = ReactStyles
stranger.resetCache = resetCache
stranger.defaultTraits = rug

export default stranger
