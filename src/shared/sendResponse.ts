import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  responseData: {
    statusCode: number;
    success: boolean;
    message: string;
    data?: T;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
  }
) => {
  res.status(responseData.statusCode).json({
    success: responseData.success,
    message: responseData.message,
    data: responseData?.data,
    meta: responseData?.meta,
  });
};

export default sendResponse;
