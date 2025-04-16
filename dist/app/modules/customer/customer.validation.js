"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerUpdateValidationSchema = exports.customerValidationSchema = void 0;
const zod_1 = require("zod");
exports.customerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z
            .string({ required_error: "Email is required" })
            .email("Invalid email"),
        phone: zod_1.z.string().min(10, "Phone must be at least 10 digits"),
    }),
});
exports.customerUpdateValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required").optional(),
        phone: zod_1.z.string().min(10, "Phone must be at least 10 digits").optional(),
    }),
});
