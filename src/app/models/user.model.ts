import { PatientRecord } from './patient-record.model';
export interface User {
  id?: string;
  username?: string;
  password?: string;
  fullname?: string;
  phoneNumber?: string;
  emailAddress?: string;
  address?: string;
  createdAt?: Date;
  patientRecord?: PatientRecord[];
}
