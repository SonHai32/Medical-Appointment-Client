import { Hospital } from "./hospital.model";
import { Specialist } from "./specialist.model";

export interface HospitalService {
  id?: string;
  name: string;
  price: string;
  hospital: Hospital;
  specialist: Specialist;
}
