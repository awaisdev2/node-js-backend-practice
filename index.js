const express = require('express');
const models = require('./src/models');

const app = express();
const port = process.env.PORT || 7000;

app.use(bodyParser.json());

models.sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
