import { Hospital } from './hospital.model';

export interface Room {
  id: string;
  name: string;
  hospital?: Hospital;
}
