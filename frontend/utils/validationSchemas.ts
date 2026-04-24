import z from "zod";

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

export type TAuthSchema = z.infer<typeof authSchema>;
export type TAuthState<T extends object> =
  | {
      errors?: z.core.$ZodFlattenedError<T>["fieldErrors"];
      success: boolean;
      message: string;
      fields: T;
    }
  | undefined;
