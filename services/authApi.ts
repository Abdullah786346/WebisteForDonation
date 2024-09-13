import {
  RegisterOrgDataInterface,
  SignUpUserInterface,
} from "@/constants/types";
import { apiCaller } from "@/utils/apiCaller";

export async function signUpUser(data: SignUpUserInterface) {
  let response = await apiCaller.post("/user/signup", data);
  return response;
}

export async function registerOrg(data: RegisterOrgDataInterface) {
  let response = await apiCaller.post("/organization/signup", data);
  return response;
}

export async function signInOrg(data: { email: string; password: string }) {
  let response = await apiCaller.post("/organization/signin", data);
  return response;
}

export async function signInUser(data: { email: string; password: string }) {
  let response = await apiCaller.post("/user/signin", data);
  return response;
}

//add other auth functions as registerUser, login, logout, etc
