export type Gender = 'Male' | 'Female';

export type UserInfo = {
  readonly id: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly gender: Gender;
};

export type User = UserInfo & {
  readonly email: string;
  readonly country: string;
  readonly job_title: string;
};
