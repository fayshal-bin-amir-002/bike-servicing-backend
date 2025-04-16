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
exports.ServiceRecordServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../../shared/prisma");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const createService = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const isBikeExists = yield prisma_1.prisma.bike.findUnique({
        where: {
            bikeId: payload === null || payload === void 0 ? void 0 : payload.bikeId,
        },
    });
    if (!isBikeExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Bike not found");
    }
    const result = yield prisma_1.prisma.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServiceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany();
    return result;
});
const getAServiceRecordById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!result) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service record not found");
    }
    return result;
});
const completeServiceRecord = (id, date) => __awaiter(void 0, void 0, void 0, function* () {
    const isServiceExists = yield prisma_1.prisma.serviceRecord.findUnique({
        where: {
            serviceId: id,
        },
    });
    if (!isServiceExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Service record not found");
    }
    if (isServiceExists && isServiceExists.status === "done") {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, "Service is already done");
    }
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: date === null || date === void 0 ? void 0 : date.completionDate,
            status: "done",
        },
    });
    return result;
});
const pendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            OR: [
                { status: { in: ["inProgress", "pending"] } },
                {
                    serviceDate: {
                        lt: sevenDaysAgo,
                    },
                },
            ],
        },
    });
    return result;
});
exports.ServiceRecordServices = {
    createService,
    getAllServiceRecord,
    getAServiceRecordById,
    completeServiceRecord,
    pendingServices,
};
