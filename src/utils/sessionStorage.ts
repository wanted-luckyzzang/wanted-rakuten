import { ApiDataType } from "types";

export const inSession = (key: string) => {
  const data = sessionStorage.getItem(key);
  if (data) return true;
  return false;
};

export const setSession = (key: string, data: ApiDataType | number): void =>
  sessionStorage.setItem(key, JSON.stringify(data));

export const getSession = (data: string): ApiDataType | number =>
  JSON.parse(sessionStorage.getItem(data) as string);
