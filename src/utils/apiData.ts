import { ApiDataType, DataType } from "types";

const getlastetCreatedAt = (data: ApiDataType): number => {
  let max = data[0].created_at;

  for (let idx = 1; idx < data.length; idx++) {
    if (data[idx].created_at > max) max = data[idx].created_at;
  }

  return max;
};

const getKeyFilterData = (apiData: ApiDataType, key: string): DataType => {
  return apiData.filter((data: DataType) => data.key === key)[0];
};

export default { getlastetCreatedAt, getKeyFilterData };
