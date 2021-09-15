const express = require('express');
const app = express();
const port = 5000;

const itemRouter = require('./routes/items');
app.use('/items', itemRouter); 

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});