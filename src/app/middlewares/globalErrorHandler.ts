import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import handleZodError from "../errors/handleZodError";
import status from "http-status";
import AppError from "../errors/AppError";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // console.log(err?.name);
  // console.log(err);
  let statusCode: number = status.INTERNAL_SERVER_ERROR;
  let message = "Something went wrong!";

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
  } else if (err instanceof AppError) {
    statusCode = err?.statusCode;
    message = err?.message;
  } else if (err instanceof Error) {
    message = err?.message;
  }

  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message,
    // stact: err,
  });
};
