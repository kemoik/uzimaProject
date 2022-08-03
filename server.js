const express =  require("express");
const cors = require ("cors");
const app =  express();
const path = require('path');
const bodyParser = require('body-parser')
var corsOptions = {
    origin: "http://localhost:8081"
  };
const patientRoute =  require('./routes/patient.routes')
app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use(cors());

app.use(express.static())
//API ROUTES
app.use('/api', patientRoute)

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log('Listening on port ' + port)
})
// 404 Handler
app.use((req, res, next) => {
  next(createError(404));
});
// Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angular-mean-crud-tutorial/index.html'));
});
// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});