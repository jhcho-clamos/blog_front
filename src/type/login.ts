// login types
export interface LoginDefaultProps {
  id: string;
}
export interface LoginProps_Get extends LoginDefaultProps {
  name: string;
  createdate: string;
}

export interface LoginProps_Post extends LoginDefaultProps {
  password: string;
}

export interface SignupProps_Post extends LoginDefaultProps {
  name: string;
  password: string;
}
