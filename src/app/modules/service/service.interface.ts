import { ServiceStatus } from "../../../../generated/prisma";

export type IService = {
  bikeId: string;
  serviceDate: Date | string;
  completionDate: Date | string;
  description: string;
  status: ServiceStatus;
};
