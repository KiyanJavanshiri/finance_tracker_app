import z from "zod";
import { TransactionCategoryAll, TransactionEnum } from "./types";

export const authSchema = z.object({
  email: z.email({
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    error: "wrong email format",
  }),
  password: z
    .string()
    .trim()
    .min(6, "password should be between 6 to 20")
    .max(20, "password should be between 6 to 20"),
  username: z
    .string()
    .min(3, "username should be between 3 to 30")
    .max(30, "username should be between 3 to 30"),
});

export const transactionSchema = z.object({
  amount: z.coerce
    .number({
      error: "This field should be number",
    })
    .min(1, "Min value for amount is 1"),
  type: z.enum(Object.values(TransactionEnum)),
  category: z.enum(Object.values(TransactionCategoryAll)),
  date: z.iso.datetime(),
  description: z.string().optional(),
});

export type TransactionSchema = z.infer<typeof transactionSchema>;
export type TAuthSchema = z.infer<typeof authSchema>;
export type TFormState<T extends object> =
  | {
      errors?: z.core.$ZodFlattenedError<T>["fieldErrors"];
      success: boolean;
      message: string;
      fields: T;
    }
  | undefined;
