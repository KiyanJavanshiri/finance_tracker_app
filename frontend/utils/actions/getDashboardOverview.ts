import axios from "axios";
import { cookies } from "next/headers";
import { TApiResponse, TDashboardData } from "../types";

export const actionGetDashboardOverview = async () => {
  try {
    const cookie = await cookies();
    const token = cookie.get("token")?.value;

    const response = await axios.get<TApiResponse<TDashboardData>>(
      `${process.env.API_URL}/dashboard`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    return response.data.data;
  } catch (error) {
    return undefined;
  }
};
