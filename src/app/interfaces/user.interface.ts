export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  urlImage?: string;
  profession?: string;
  country: string;
  state: string;
  city: string;
  biography?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}
