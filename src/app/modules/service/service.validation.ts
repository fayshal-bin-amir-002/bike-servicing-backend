import { z } from "zod";

export const serviceValidationSchema = z.object({
  body: z.object({
    bikeId: z.string().min(1, "Bike ID is required"),
    serviceDate: z.string().min(1, "Service Date is required"),
    completionDate: z.string().optional(),
    description: z.string().min(1, "Description is required"),
    status: z.enum(["pending", "in-progress", "done"] as const),
  }),
});

export const serviceCompletedSchema = z.object({
  body: z.object({
    completionDate: z.string().min(1, "Completion Date is required"),
  }),
});
