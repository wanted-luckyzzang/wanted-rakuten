import { ApiDataType, DataType } from "types";

export const getLatestCreatedAt = (data: ApiDataType | undefined): number => {
  if (data) {
    let max = data[0].created_at;
    for (let idx = 1; idx < data.length; idx++) {
      if (data[idx].created_at > max) max = data[idx].created_at;
    }

    return max;
  }
  return 0;
};

export const getKeyFilterData = (
  apiData: ApiDataType | undefined,
  key: string | undefined
): DataType | undefined =>
  apiData?.filter((data: DataType) => data.key === key)[0];
