import { AcademicRank } from './academic-rank.model';
import { Gender } from './gender.model';
import { Hospital } from './hospital.model';
import { Specialist } from './specialist.model';
import { Ward } from './ward.model';

export interface Doctor {
  id: string;
  firstname: string;
  middlename: string;
  lastname: string;
  birthday: Date;
  phoneNumber: string;
  emailAddress: string;
  startAt: Date;
  specialist?: Specialist;
  ward?: Ward;
  gender: Gender;
  hospital?: Hospital;
  academicRank: AcademicRank[];
}
