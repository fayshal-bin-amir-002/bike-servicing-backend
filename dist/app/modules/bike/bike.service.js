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
exports.BikeServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const addeBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isCustomerExists = yield prisma_1.prisma.customer.findUnique({
        where: {
            customerId: payload === null || payload === void 0 ? void 0 : payload.customerId,
        },
    });
    if (!isCustomerExists) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Customer not exists");
    }
    const result = yield prisma_1.prisma.bike.create({
        data: payload,
    });
    return result;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findMany();
    return result;
});
const getABikeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bike not found");
    }
    return result;
});
exports.BikeServices = {
    addeBike,
    getAllBikes,
    getABikeById,
};
