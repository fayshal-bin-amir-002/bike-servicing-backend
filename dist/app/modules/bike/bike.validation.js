"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeValidationSchema = void 0;
const zod_1 = require("zod");
exports.bikeValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, "Brand is required"),
        model: zod_1.z.string().min(1, "Model is required"),
        year: zod_1.z.number().int().min(1900, "Year must be valid"),
        customerId: zod_1.z.string().min(1, "Customer id is required"),
    }),
});
