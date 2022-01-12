import { Gender } from './gender.model';
import PatientRelative from './patient-relative.model';
import { Ward } from './ward.model';

export interface PatientRecord {
  id?: string;
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  citizenIdentification: string;
  birthday: Date;
  age: number;
  job?: string;
  gender: Gender;
  ward: Ward;
  patientRelative: PatientRelative;
}
