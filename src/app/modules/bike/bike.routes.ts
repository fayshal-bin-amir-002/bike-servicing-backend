import express from "express";
import { BikeControllers } from "./bike.controller";
import validateRequest from "../../middlewares/validateRequest";
import { bikeValidationSchema } from "./bike.validation";

const router = express.Router();

router.post(
  "/",
  validateRequest(bikeValidationSchema),
  BikeControllers.addeBike
);

router.get("/", BikeControllers.getAllBikes);

router.get("/:id", BikeControllers.getABikeById);

export const BikeRoutes = router;
