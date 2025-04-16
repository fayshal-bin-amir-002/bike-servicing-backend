import express from "express";
import { CustomerRoutes } from "../modules/customer/customer.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/customers",
    route: CustomerRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
