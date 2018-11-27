const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.get('/', (req, res, next) => {
  res.json({ hello: 'world' })
})

const port = 3000

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`)
})
