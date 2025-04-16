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
    message: "Customers fetched successfully",
    data: result,
  });
});

const getACustomerById = catchAsync(async (req, res) => {
  const result = await CustomerServices.getACustomerById(req.params?.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomerData = catchAsync(async (req, res) => {
  const result = await CustomerServices.updateCustomerData(
    req.params?.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer updated successfully",
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  await CustomerServices.deleteCustomer(req.params?.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const CustomerControllers = {
  createCustomer,
  getAllCustomers,
  getACustomerById,
  updateCustomerData,
  deleteCustomer,
};
