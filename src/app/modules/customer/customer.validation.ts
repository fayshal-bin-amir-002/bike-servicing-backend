import { z } from "zod";

export const customerValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z
      .string({ required_error: "Email is required" })
      .email("Invalid email"),
    phone: z.string().min(10, "Phone must be at least 10 digits"),
  }),
});

export const customerUpdateValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required").optional(),
    phone: z.string().min(10, "Phone must be at least 10 digits").optional(),
  }),
});
