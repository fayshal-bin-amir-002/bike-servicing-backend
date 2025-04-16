import { z } from "zod";

export const bikeValidationSchema = z.object({
  body: z.object({
    brand: z.string().min(1, "Brand is required"),
    model: z.string().min(1, "Model is required"),
    year: z.number().int().min(1900, "Year must be valid"),
    customerId: z.string().min(1, "Customer id is required"),
  }),
});
