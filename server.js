import express from 'express'

express()
  .use(express.static('./public'))
  .set('views', './views')
  .set('view engine', 'ejs')
  .get('/', (req, res) => {
    res.send('ok')
  })
  .get('/fruit', (req, res) => {
    res.render('fruit', {
      fruits: ['banana', 'apple']
    })
  })
  .listen(8000)
