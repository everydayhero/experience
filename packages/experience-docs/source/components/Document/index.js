import React from 'react'
import { comp, ReactStyles } from '@edh/stranger'

const renderStyles = (styles) => (
  styles.map((style, index) => <link key={index} rel='stylesheet' href={style} />)
)

const renderScripts = (scripts) => (
  scripts.map((script, index) => <script key={index} src={script} />)
)
const Root = comp(({
  traits: {
    color,
    font,
    media
  }
}) => ({
  color: color.text.darker,
  fontSize: '100%',
  fontFamily: `"proxima-nova", ${font.family.ui}`,
  fontWeight: font.weight.normal,
  [media.md]: {
    fontSize: 'calc(1em + (1.125 - 1) * (100vw - 25em) / (62.5 - 25))'
  }
}))('html')

const Document = ({
  head,
  content,
  state = {},
  styles = ['/main.css'],
  scripts = ['/main.js']
}) => (
  <Root>
    <head>
      <title>Everydayhero Experience System</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
      <link rel='icon' type='image/png' href='/favicon-32x32.png' sizes='32x32' />
      <link rel='icon' type='image/png' href='/favicon-16x16.png' sizes='16x16' />
      <link rel='manifest' href='/manifest.json' />
      <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#1bab6b' />
      <meta name='apple-mobile-web-app-title' content='Everydayhero' />
      <meta name='application-name' content='Everydayhero' />
      <meta name='theme-color' content='#ffffff' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {renderStyles(styles)}
      <ReactStyles />
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(d) {
            var config = {
              kitId: 'ord6jrb',
              scriptTimeout: 3000,
              async: true
            },
            h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
        `
      }} />
    </head>
    <body>
      <main
        id='mount'
        dangerouslySetInnerHTML={{
          __html: content
        }}
      />

      <script
        id='initial-state'
        type='application/json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(state)
        }}
      />

      {renderScripts(scripts)}
      <noscript><iframe src='https://www.googletagmanager.com/ns.html?id=GTM-PN6K34'
        height='0' width='0' style={{display: 'none', visibility: 'hidden'}} /></noscript>
    </body>
  </Root>
)

export default Document
