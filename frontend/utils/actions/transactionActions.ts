"use server";
import z from "zod";
import { cookies } from "next/headers";
import { TApiResponse, TOperationType, TransactionEnum } from "../types";
import axios from "axios";
import { redirect } from "next/navigation";
import { TFormState, TransactionSchema, transactionSchema } from "../validationSchemas";

export const actionGetTransactions = async (
  type: TransactionEnum,
  page: number,
) => {
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    const response = await axios.get<
      TApiResponse<{ transactions: TOperationType[]; count: number }>
    >(`${process.env.API_URL}/transactions?types=${type}&page=${page}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data.data;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const actionDeleteTransaction = async (formData: FormData) => {
  const transactionId = formData.get("transactionId") as string;
  const cookie = await cookies();
  const token = cookie.get("token")?.value;
  try {
    await axios.delete(`${process.env.API_URL}/transactions/${transactionId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    console.error(err);
  }
  redirect("/transactions");
};

export const actionCreateTransaction = async (
  state: TFormState<TransactionSchema>,
  formData: FormData,
) => {
  const rawData = Object.fromEntries(formData);
  const validResult = transactionSchema.safeParse(rawData);

  if (!validResult.success) {
    return {
      errors: z.flattenError(validResult.error).fieldErrors,
      success: false,
      message: "validation error",
      fields: {
        amount: formData.get("amount") as string,
        type: formData.get("type") as string,
        category: formData.get("category") as string,
        date: formData.get("date") as string,
        description: formData.get("description") as string,
      } as unknown as TransactionSchema,
    };
  }

  console.log("all is good");
};
