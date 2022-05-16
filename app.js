const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Anson ld!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
app.get('*', function(req, res){
  res.status(404).send('eror 404');
});