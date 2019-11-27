const express = require('express');
const connectDB = require('./config/db');
const app = express();
const bodyParser = require('body-parser');

// connect to database
connectDB();

// Define Routes
app.use(bodyParser.json())
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

app.use(express.json({extend: false}));
const PORT = 3002;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));