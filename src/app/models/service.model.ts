import { Hospital } from './hospital.model';
import { Specialist } from './specialist.model';

export interface Service {
  id: string;
  hospital: Hospital;
  specialList: Specialist;
  name: string;
  price: number;
}
