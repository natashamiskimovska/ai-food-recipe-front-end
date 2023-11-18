export interface IUser {
    id: string;
    first_name: string;
    last_name: string;
    team: string;
    addresses: IAddress;
    password: string;
    email: string;
    role: string;
    avatar_url: string;
    isEmailVerified: boolean;
    updatedAt: string;
  }
  
  export interface IPutUser {
    first_name?: string;
    last_name?: string;
    addresses?: IAddress;
    password?: string;
    email?: string;
    role?: string;
    avatar_url?: string;
  }
  
  export interface IAddress {
    zip: string;
    street: string;
    city: string;
    country: string;
  }