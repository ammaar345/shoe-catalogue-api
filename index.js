
const express = require("express");
const exphbs = require('express-handlebars');
const bodyParser = require("body-parser")
const app = express();
const axios = require('axios').default;
//

//
const flash = require('express-flash');
const session = require('express-session');
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://sneakygoblin:codex123@localhost:5432/waiters';

const pool = new Pool({
  connectionString
});

const ShoeCatalogue = require("./shoe-catalogue");
const ShoeCatRoutes = require('./shoeCatRoutes');
const shoeCatFunc = ShoeCatalogue(pool);
const shoeCatRoutes = ShoeCatRoutes(shoeCatFunc);


app.use(session({
  secret: "<add a secret string here>",
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({
  layoutsDir: './views/layouts'
}));
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())








async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}  
// app.get('/',shoeCatRoutes.home)
// app.get('/api/shoes	',shoeCatRoutes)
// app.post('/api/shoes',shoeCatRoutes)
// app.get('/api/shoes/brand/:brandname	');
// app.get('/api/shoes/size/:size	',shoeCatRoutes.)
// app.get('/api/shoes/brand/:brandname/size/:size	',shoeCatRoutes)
// app.post('/api/shoes/sold/:id	',shoeCatRoutes)
const PORT = process.env.PORT || 2009;
app.listen(PORT, function () {
  console.log("App started at port :", PORT);
})
