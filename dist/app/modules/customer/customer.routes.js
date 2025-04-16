"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const customer_validation_1 = require("./customer.validation");
const router = express_1.default.Router();
router.post("/", (0, validateRequest_1.default)(customer_validation_1.customerValidationSchema), customer_controller_1.CustomerControllers.createCustomer);
router.get("/", customer_controller_1.CustomerControllers.getAllCustomers);
router.get("/:id", customer_controller_1.CustomerControllers.getACustomerById);
router.put("/:id", (0, validateRequest_1.default)(customer_validation_1.customerUpdateValidationSchema), customer_controller_1.CustomerControllers.updateCustomerData);
router.delete("/:id", customer_controller_1.CustomerControllers.deleteCustomer);
exports.CustomerRoutes = router;
