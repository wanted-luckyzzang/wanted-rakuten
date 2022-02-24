export interface FileDataType {
  key: string;
  thumbnailUrl: string;
  name: string;
  size: number;
}

export interface SentType {
  subject: string;
  content: string;
  emails: string[];
}
export type FilesType = FileDataType[];

export interface DataType {
  created_at: number;
  key: string | undefined;
  expires_at: number;
  download_count: number;
  count: number;
  size: number;
  summary: string;
  thumbnailUrl: string;
  files: FilesType;
  sent?: SentType;
}

export type ApiDataType = DataType[];
