"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const service_controller_1 = require("./service.controller");
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router.get("/status", service_controller_1.ServiceRecordControllers.pendingServices);
router.post("/", (0, validateRequest_1.default)(service_validation_1.serviceValidationSchema), service_controller_1.ServiceRecordControllers.createService);
router.get("/", service_controller_1.ServiceRecordControllers.getAllServiceRecord);
router.get("/:id", service_controller_1.ServiceRecordControllers.getAServiceRecordById);
router.put("/:id", (0, validateRequest_1.default)(service_validation_1.serviceCompletedSchema), service_controller_1.ServiceRecordControllers.completeServiceRecord);
exports.ServiceRecordRoutes = router;
