"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var http_status_1 = __importDefault(require("http-status"));
var app = (0, express_1.default)();
var port = process.env.PORT || 5000;
app.get("/health", function (req, res) { return res.sendStatus(http_status_1.default.OK); });
app.listen(port, function () {
    console.log("Server is up and running on port: ".concat(port));
});
