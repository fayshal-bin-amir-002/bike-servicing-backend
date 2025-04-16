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

const getACustomerById = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, "User not found");
  }

  return result;
};

const updateCustomerData = async (
  id: string,
  payload: { name: string; phone: string }
) => {
  const userExists = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  if (!userExists) {
    throw new AppError(status.NOT_FOUND, "User not found");
  }

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return result;
};

const deleteCustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomers,
  getACustomerById,
  updateCustomerData,
  deleteCustomer,
};
