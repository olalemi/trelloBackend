const express = require('express');
const bodyParser = require('body-parser');
const connectDatabase = require('./database/connect_DB');
const route = require("./routes/task.route")
const { notFound } = require('./middlewares/errors/notFound');
const errorHandler = require('./middlewares/errors/errorHandler');
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3002;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json({ extended: true }));

app.use('/api/v1', route);

app.use(errorHandler);
app.use(notFound);
app.use(cors());
 
connectDatabase(async () => {
    app.listen(PORT, () => {
      console.log(`\n app started on PORT=${PORT}`);
    });
  });
