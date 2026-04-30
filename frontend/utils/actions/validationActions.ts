"use server";
import z from "zod";
import { cookies } from "next/headers";
import axios from "axios";
import { TAuthState, TAuthSchema, authSchema } from "../validationSchemas";
import { TApiError, TApiResponse } from "../types";
import { redirect } from "next/navigation";

export const actionLogin = async (
  state: TAuthState<Pick<TAuthSchema, "email" | "password">>,
  formData: FormData,
) => {
  const rawData = Object.fromEntries(formData);

  const validationResult = authSchema
    .pick({ email: true, password: true })
    .safeParse(rawData);

  if (!validationResult.success) {
    return {
      ...state,
      errors: z.flattenError(validationResult.error).fieldErrors,
      success: false,
      message: "validation error",
      fields: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      },
    };
  }

  const data = validationResult.data;

  try {
    const response = await axios.post<TApiResponse<{ access_token: string }>>(
      `${process.env.API_URL}/auth/login`,
      data,
    );

    const cookie = await cookies();
    cookie.set("token", response.data.data.access_token);
  } catch (error) {
    if (axios.isAxiosError<TApiError>(error)) {
      const err = error.response?.data;
      return {
        ...state,
        success: false,
        message:
          (err && err.status === 401 && "Wrong Credentials") ||
          "Error occured on server, try again later",
        fields: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        },
      };
    }
  }

  redirect("/");
};

export const actionRegister = async (
  state: TAuthState<TAuthSchema>,
  formData: FormData,
) => {
  const rawData = Object.fromEntries(formData);

  const validationResult = authSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      ...state,
      errors: z.flattenError(validationResult.error).fieldErrors,
      success: false,
      message: "validation error",
      fields: {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        username: formData.get("username") as string,
      },
    };
  }

  const data = validationResult.data;

  try {
    await axios.post<TApiResponse<void>>(
      `${process.env.API_URL}/auth/register`,
      data,
    );
  } catch (error) {
    if (axios.isAxiosError<TApiError>(error)) {
      const err = error.response?.data;
      return {
        ...state,
        success: false,
        message:
          (err && err.status === 401 && "Wrong Credentials") ||
          "Error occured on server, try again later",
        fields: {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
          username: formData.get("username") as string,
        },
      };
    }
  }

  redirect("/sign-in");
};

export const actionLogout = async () => {
  const cookie = await cookies();
  cookie.delete("token");
  redirect("/sign-in");
};
