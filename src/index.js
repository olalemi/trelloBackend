const express = require('express');
const connectDatabase = require('./database/connect_DB');
const route = require("./routes/task.route")

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json({ extended: true }));

app.use('/api/v1', route);
 
connectDatabase(async () => {
    app.listen(PORT, () => {
      console.log(`\n app started on PORT=${PORT}`);
    });
  });
