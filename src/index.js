const express = require('express')
const router = require('./router/router')
const path = require('path')
const ejs = require('ejs')
app = express();

//SETTINGS
app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine' , 'ejs')

app.use(router)


app.listen(app.get('port'), () => {
console.log('Server levantado')
})