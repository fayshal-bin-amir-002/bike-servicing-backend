import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./app/routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import status from "http-status";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    status: "success",
    code: 200,
    message: "Bike Servicing Backend is running...",
    author: {
      name: "Fayshal Bin Amir",
      email: "foyshalbinamir@gmail.com",
      contact: "+8801755288840",
    },
  });
});

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(status.NOT_FOUND).json({
    success: false,
    message: "Not Found",
    error: {
      path: req.originalUrl,
      statusCode: status.NOT_FOUND,
      message: "Not Found",
    },
  });
  next();
});

export default app;
