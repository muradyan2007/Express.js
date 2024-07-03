import express from 'express';
import bodyParser from 'body-parser';
import linksRoutes from './routes/links';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/api', linksRoutes);


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
});

