import { Ward } from "./ward.model";

export interface Hospital {
  id: string;
  name: string;
  address: string;
  ward: Ward;
}
