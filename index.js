import express from 'express'
import portfinder from 'portfinder'
import { ROUTING } from './config.js'
const app = express()
const DEFAULT_PORT = 50088
await portfinder.getPortPromise({
    port: DEFAULT_PORT
}).then(port => {
  app.get('/talk', (req, res) => {
    const text = decodeURIComponent(req.query.text || '')
    ROUTING.forEach(route => {
      if (text.startsWith(route.prefix)) {
        const redirectUrl = `http://localhost:${route.port}/talk?text=${req.query.text}`
        res.redirect(redirectUrl)
      }
    })
  })
  app.listen(port)
  console.log(`start server localhost:${port}`)
})
