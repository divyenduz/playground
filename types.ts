export type Branch = {
  configuration: unknown;
  connectionString: string;
  createdAt: string;
  description?: string | undefined;
  id: string;
  name: string;
  parentID?: (string | null) | undefined;
  publicAccess: boolean;
  region: string;
  status: unknown;
  updatedAt: string;
};
