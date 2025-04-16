import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { ServiceRecordServices } from "./service.service";

const createService = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.createService(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.getAllServiceRecord();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service records fetched successfully",
    data: result,
  });
});

const getAServiceRecordById = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.getAServiceRecordById(
    req.params?.id
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service record fetched successfully",
    data: result,
  });
});

const completeServiceRecord = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.completeServiceRecord(
    req.params?.id,
    req.body
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service marked as completed",
    data: result,
  });
});

const pendingServices = catchAsync(async (req, res) => {
  const result = await ServiceRecordServices.pendingServices();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Overdue or pending services fetched successfully",
    data: result,
  });
});

export const ServiceRecordControllers = {
  createService,
  getAllServiceRecord,
  getAServiceRecordById,
  completeServiceRecord,
  pendingServices,
};
