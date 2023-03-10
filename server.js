const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
// local host port is defined to be 3001
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);
// synchronous call for the port
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Application listening on port ${PORT}!`));
});