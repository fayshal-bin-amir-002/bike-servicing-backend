import status from "http-status";
import { prisma } from "../../../shared/prisma";
import AppError from "../../errors/AppError";
import { IService } from "./service.interface";

const createService = async (payload: IService) => {
  const isBikeExists = await prisma.bike.findUnique({
    where: {
      bikeId: payload?.bikeId,
    },
  });

  if (!isBikeExists) {
    throw new AppError(status.NOT_FOUND, "Bike not found");
  }

  const result = await prisma.serviceRecord.create({
    data: payload,
  });

  return result;
};

const getAllServiceRecord = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getAServiceRecordById = async (id: string) => {
  const result = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  if (!result) {
    throw new AppError(status.NOT_FOUND, "Service record not found");
  }

  return result;
};

const completeServiceRecord = async (
  id: string,
  date: { completionDate: Date }
) => {
  const isServiceExists = await prisma.serviceRecord.findUnique({
    where: {
      serviceId: id,
    },
  });

  if (!isServiceExists) {
    throw new AppError(status.NOT_FOUND, "Service record not found");
  }

  if (isServiceExists && isServiceExists.status === "done") {
    throw new AppError(status.BAD_REQUEST, "Service is already done");
  }

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: date?.completionDate,
      status: "done",
    },
  });

  return result;
};

const pendingServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.serviceRecord.findMany({
    where: {
      OR: [
        { status: { in: ["inProgress", "pending"] } },
        {
          serviceDate: {
            lt: sevenDaysAgo,
          },
        },
      ],
    },
  });

  return result;
};

export const ServiceRecordServices = {
  createService,
  getAllServiceRecord,
  getAServiceRecordById,
  completeServiceRecord,
  pendingServices,
};
