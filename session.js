var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.send('ok')
})

app.get('/fruit', function(req, res) {
  res.render('fruit', {
    fruits: ['banana', 'apple']
  })
})

app.listen(8000)
