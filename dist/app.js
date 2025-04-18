"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandler_1 = require("./app/middlewares/globalErrorHandler");
const http_status_1 = __importDefault(require("http-status"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send({
        status: "success",
        code: 200,
        message: "Bike Servicing Backend is running...",
        author: {
            name: "Fayshal Bin Amir",
            email: "foyshalbinamir@gmail.com",
            contact: "+8801755288840",
        },
    });
});
app.use(globalErrorHandler_1.globalErrorHandler);
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: "Not Found",
        error: {
            path: req.originalUrl,
            statusCode: http_status_1.default.NOT_FOUND,
            message: "Not Found",
        },
    });
    next();
});
exports.default = app;
