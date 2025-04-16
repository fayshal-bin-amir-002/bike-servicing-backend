"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, responseData) => {
    res.status(responseData.statusCode).json({
        success: responseData.success,
        message: responseData.message,
        data: responseData === null || responseData === void 0 ? void 0 : responseData.data,
        meta: responseData === null || responseData === void 0 ? void 0 : responseData.meta,
    });
};
exports.default = sendResponse;
