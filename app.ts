
const express = require('express');
const bodyParser = require('body-parser');
const linksRoutes = require('./routes/linksRoutes');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', linksRoutes);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});
