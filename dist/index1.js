"use strict";
// https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
function loggerMiddleware(req, res, next) {
    console.log(`${req.method} ${req.path}`);
    next();
}
const app = express_1.default();
const PORT = 8080;
const router = express_1.default.Router();
router.get('/hello', (req, res) => {
    res.json({ Hello: 'world' });
});
app.use('/api', router);
app.use(loggerMiddleware);
app.use(bodyParser.json());
app.get('/', (req, res) => res.send({
    hostname: req.hostname,
    path: req.path,
    method: req.method,
}));
app.post('/', (req, res) => {
    console.log(req.body);
    res.send(req.body);
});
app.get('/express', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
//# sourceMappingURL=index1.js.map