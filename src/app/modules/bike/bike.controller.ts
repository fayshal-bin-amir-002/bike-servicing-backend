import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { BikeServices } from "./bike.service";

const addeBike = catchAsync(async (req, res) => {
  const result = await BikeServices.addeBike(req.body);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req, res) => {
  const result = await BikeServices.getAllBikes();
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bikes fetched successfully",
    data: result,
  });
});

const getABikeById = catchAsync(async (req, res) => {
  const result = await BikeServices.getABikeById(req.params?.id);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Bike fetched successfully",
    data: result,
  });
});

export const BikeControllers = {
  addeBike,
  getAllBikes,
  getABikeById,
};
