import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { CustomerServices } from "./customer.service";

const createCustomer = catchAsync(async (req, res) => {
  const result = await CustomerServices.createCustomer(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomers = catchAsync(async (req, res) => {
  const result = await CustomerServices.getAllCustomers();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers data retrived successfully",
    data: result,
  });
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
};
