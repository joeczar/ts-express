// https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/

import express from 'express';
import * as bodyParser from 'body-parser';
import { appendFile } from 'fs';

function loggerMiddleware(
    req: express.Request,
    res: express.Response,
    next: any
) {
    console.log(`${req.method} ${req.path}`);
    next();
}

const app = express();
const PORT = 8080;

const router = express.Router();

router.get('/hello', (req: express.Request, res: express.Response) => {
    res.json({ Hello: 'world' });
});
app.use('/api', router);
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.get('/', (req: express.Request, res: express.Response) =>
    res.send({
        hostname: req.hostname,
        path: req.path,
        method: req.method,
    })
);

app.post('/', (req: express.Request, res: express.Response) => {
    console.log(req.body);
    res.send(req.body);
});

app.get('/express', (req: express.Request, res: express.Response) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
