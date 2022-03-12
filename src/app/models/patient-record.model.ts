import { PatientSchedule } from './patient-schedule.model';
import { User } from 'src/app/models/user.model';
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
  address: string;
  age: number;
  job?: string;
  gender: Gender;
  ward: Ward;
  patientRelative?: PatientRelative;
  user: User;
  patientSchedule?: PatientSchedule[];
}
