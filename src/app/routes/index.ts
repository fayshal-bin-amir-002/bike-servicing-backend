import express from "express";
import { CustomerRoutes } from "../modules/customer/customer.routes";
import { BikeRoutes } from "../modules/bike/bike.routes";
import { ServiceRecordRoutes } from "../modules/service/service.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
  {
    path: "/bikes",
    route: BikeRoutes,
  },
  {
    path: "/services",
    route: ServiceRecordRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
