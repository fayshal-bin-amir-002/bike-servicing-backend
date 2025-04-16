import express from "express";
import { CustomerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import {
  customerUpdateValidationSchema,
  customerValidationSchema,
} from "./customer.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(customerValidationSchema),
  CustomerControllers.createCustomer
);

router.get("/", CustomerControllers.getAllCustomers);

router.get("/:id", CustomerControllers.getACustomerById);

router.put(
  "/:id",
  validateRequest(customerUpdateValidationSchema),
  CustomerControllers.updateCustomerData
);

router.delete("/:id", CustomerControllers.deleteCustomer);

export const CustomerRoutes = router;
