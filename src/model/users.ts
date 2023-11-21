export type User = {
  id: number;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};
