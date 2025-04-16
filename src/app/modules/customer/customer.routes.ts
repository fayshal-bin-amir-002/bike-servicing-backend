import express from "express";
import { CustomerControllers } from "./customer.controller";
import validateRequest from "../../middlewares/validateRequest";
import { customerValidationSchema } from "./customer.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(customerValidationSchema),
  CustomerControllers.createCustomer
);

router.get("/", CustomerControllers.getAllCustomers);

export const CustomerRoutes = router;
