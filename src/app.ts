import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

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
