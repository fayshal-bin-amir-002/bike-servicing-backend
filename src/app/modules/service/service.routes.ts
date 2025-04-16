import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceRecordControllers } from "./service.controller";
import {
  serviceCompletedSchema,
  serviceValidationSchema,
} from "./service.validation";

const router = express.Router();

router.get("/status", ServiceRecordControllers.pendingServices);

router.post(
  "/",
  validateRequest(serviceValidationSchema),
  ServiceRecordControllers.createService
);

router.get("/", ServiceRecordControllers.getAllServiceRecord);

router.get("/:id", ServiceRecordControllers.getAServiceRecordById);

router.put(
  "/:id",
  validateRequest(serviceCompletedSchema),
  ServiceRecordControllers.completeServiceRecord
);

export const ServiceRecordRoutes = router;
