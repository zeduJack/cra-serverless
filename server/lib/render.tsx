import { readFileSync } from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { HelmetData } from 'react-helmet'
import { HelmetProvider } from 'react-helmet-async'
import { StaticRouter } from 'react-router-dom'
import { ServerStyleSheets } from '@material-ui/core/styles';

import { files } from '../config'
const html = readFileSync(files.index).toString()

export const render = (Tree: React.ElementType, path: string) => {
  const context = { helmet: {} as HelmetData }
  const routerContext = {};
  const sheets = new ServerStyleSheets()

  const markup = renderToString(
    sheets.collect(
      <HelmetProvider context={context}>
        <StaticRouter location={path} context={routerContext}>
          <Tree />
        </StaticRouter>
      </HelmetProvider>,
    ),
  )
  // Grab the CSS from the sheets.
  const css = sheets.toString();


  return html
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace('<title>React App</title>', context.helmet.title.toString())
    .replace('</head>', `${context.helmet.meta.toString()}</head>`)
    .replace('</head>', `${context.helmet.link.toString()}</head>`)
    .replace('<body>', `<body ${context.helmet.bodyAttributes.toString()}>`)
    .replace('<style id="jss-server-side"></style>', `<style id="jss-server-side">${css}</style>`)
}
