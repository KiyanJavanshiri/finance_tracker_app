export type TApiResponse<T> = {
  success: string;
  data: T;
};

export type TApiError = {
  message: string;
  status: number;
};
