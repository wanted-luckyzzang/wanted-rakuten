export interface FileDataType {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}

export type FilesType = FileDataType[];

export interface DataType {
  created_at: number;
  key: string;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files: FilesType;
}

export type ApiDataType = DataType[];
