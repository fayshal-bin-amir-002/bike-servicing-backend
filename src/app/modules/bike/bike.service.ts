import status from "http-status";
import { prisma } from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { IBike } from "./bike.interface";

const addeBike = async (payload: IBike) => {
  const isCustomerExists = await prisma.customer.findUnique({
    where: {
      customerId: payload?.customerId,
    },
  });

  if (!isCustomerExists) {
    throw new AppError(status.BAD_REQUEST, "Customer not exists");
  }

  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};

const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getABikeById = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, "Bike not found");
  }

  return result;
};

export const BikeServices = {
  addeBike,
  getAllBikes,
  getABikeById,
};
