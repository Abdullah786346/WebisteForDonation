export interface RegisterOrgDataInterface {
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phone: string;
  category: string;
  mission: string;
  image: string;
  residents: number;
  password: string;
  accreditation: string;
}
export type UserInterface = {
  _id?: string;
  fullName: string;
  email: string;
  anonymousName?: string;
  anonymousEmail?: string;
  password: string;
  bio?: string;
  address?: string;
  country?: string;
  phone?: string;
  image: string;
  role: "admin" | "moderator" | "donor" | "volunteer";
  anonymous: boolean;
  city?: string;
  state?: string;
};

export type OrganizationInterface = {
  _id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  state: string;
  zipCode: string;
  email: string;
  phone?: string;
  image: string;
  category: "orphanage" | "disablePeople" | "hospital";
  mission: string;
  residents: number;
  accreditation: string;
  role?: string;
  isVerified?: boolean;
};

export interface SignUpUserInterface extends UserInterface {
  confirmPassword?: string;
}
export interface createCharityType {
  title: string;
  description: string;
  images: string[];
  amountNeeded: number;
  deadline: string;
}
export interface CharityCardType extends createCharityType {
  _id: string;
  amountRaised: number;
  createdAt?: string;
  updatedAt?: string;
  organization?: RegisterOrgDataInterface;
}
