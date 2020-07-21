import * as express from 'express';
const app = express();
const PORT = 8080;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

app.get('/express', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
