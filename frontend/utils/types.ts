import type { IconType } from "react-icons";

export type TApiResponse<T> = {
  success: string;
  data: T;
};

export type TApiError = {
  message: string;
  status: number;
};

export type TPathLink = {
  name: string;
  path: string;
  Icon: IconType;
};
