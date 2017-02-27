import cxsync from 'cxsync'
import React from 'react'

const stranger = cxsync

export const addRule = stranger
export const renderCssToString = () => cxsync.css
export const ReactStyles = () => (
  <style dangerouslySetInnerHTML={{__html: cxsync.css}} />
)
export const resetCache = () => cxsync.reset

stranger.addRule = addRule
stranger.renderCssToString = renderCssToString
stranger.ReactStyles = ReactStyles
stranger.resetCache = resetCache

export default stranger
