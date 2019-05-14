const express = require('express')
const app = express();
const path = require('path')
const PORT = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'assets')))
//   .get('/', (req, res) => res.sendfile(path.join(__dirname + "/src/testmain.html")))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  // .get('/', (req, res) => res.send('src/main'))
  // res.sendFile(path.join(__dirname + "/../public/index.html"))
  // .set('views', path.join(__dirname, 'views'))
  // .set('view engine', 'ejs')
  // .get('/cool', (req, res) => res.send(cool()))

app.use('/assets',express.static(path.join(__dirname, '/assets/')));
app.use('/build', express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname + "/testmain.html")))  
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
