"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serviceCompletedSchema = exports.serviceValidationSchema = void 0;
const zod_1 = require("zod");
exports.serviceValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().min(1, "Bike ID is required"),
        serviceDate: zod_1.z.string().min(1, "Service Date is required"),
        completionDate: zod_1.z.string().optional(),
        description: zod_1.z.string().min(1, "Description is required"),
        status: zod_1.z.enum(["pending", "in-progress", "done"]),
    }),
});
exports.serviceCompletedSchema = zod_1.z.object({
    body: zod_1.z.object({
        completionDate: zod_1.z.string().min(1, "Completion Date is required"),
    }),
});
