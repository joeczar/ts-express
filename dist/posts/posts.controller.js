"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class PostsController {
    constructor() {
        this.path = '/posts';
        this.router = express_1.default.Router();
        this.posts = [
            {
                author: 'Joe Czar',
                content: 'The best Typescript Express Server ever copied.',
                title: "Joe's Ts Express Server",
            },
        ];
        this.getAllPosts = (req, res) => {
            res.send(this.posts);
        };
        this.createAPost = (req, res) => {
            const post = req.body;
            this.posts.push(post);
            res.send(post);
        };
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.get(this.path, this.getAllPosts);
        this.router.post(this.path, this.createAPost);
    }
}
exports.default = PostsController;
//# sourceMappingURL=posts.controller.js.map