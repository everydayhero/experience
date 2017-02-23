import React from 'react'

const renderStyles = (styles) => (
  styles.map((style, index) => <link key={index} rel='stylesheet' href={style} />)
)

const renderScripts = (scripts) => (
  scripts.map((script, index) => <script key={index} src={script} />)
)

export default ({
  head,
  content,
  state = {},
  styles = ['/main.css'],
  scripts = ['/main.js']
}) => (
  <html>
    <head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      {head.title.toComponent()}
      {head.meta.toComponent()}
      {renderStyles(styles)}
      <script dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PN6K34');`
      }} />

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
  </html>
)
