const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 5550;


app.get('/status', (req, res) => {
  res.send({
    message: "Hello world"
  })
})

app.listen(port, () => {
  console.log(`the server is running on port ${port}`)
})