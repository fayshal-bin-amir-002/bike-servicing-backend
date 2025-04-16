"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createCustomer = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield prisma_1.prisma.customer.findUnique({
        where: {
            email: payload === null || payload === void 0 ? void 0 : payload.email,
        },
    });
    if (userExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "This user is already exists");
    }
    const result = yield prisma_1.prisma.customer.create({
        data: payload,
    });
    return result;
});
const getAllCustomers = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findMany();
    return result;
});
const getACustomerById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    return result;
});
const updateCustomerData = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const userExists = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: id,
        },
    });
    if (!userExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "User not found");
    }
    const result = yield prisma_1.prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const deleteCustomer = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.CustomerServices = {
    createCustomer,
    getAllCustomers,
    getACustomerById,
    updateCustomerData,
    deleteCustomer,
};
