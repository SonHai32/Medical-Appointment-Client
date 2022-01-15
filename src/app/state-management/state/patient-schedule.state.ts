import { Specialist } from '../../models/specialist.model';
import { Shift } from '../../models/shift.model';
import { PatientRecord } from 'src/app/models/patient-record.model';
import { Doctor } from '../../models/doctor.model';
import { Hospital } from '../../models/hospital.model';
import { PatientSchedule } from 'src/app/models/patient-schedule.model';
export interface PatientScheduleState {
  hospital: Hospital | null;
  doctor: Doctor | null;
  shift: Shift | null;
  specialList: Specialist | null;
  patientRecordSeleted: PatientRecord | null;
  patientScheduleList: PatientSchedule[];
}
