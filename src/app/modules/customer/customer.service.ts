import status from "http-status";
import { prisma } from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { ICustomer } from "./customer.interface";

const createCustomer = async (payload: ICustomer) => {
  const userExists = await prisma.customer.findUnique({
    where: {
      email: payload?.email,
    },
  });

  if (userExists) {
    throw new AppError(status.BAD_REQUEST, "This user is already exists");
  }

  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

const getAllCustomers = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomers,
};
