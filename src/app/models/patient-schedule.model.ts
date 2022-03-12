import { HospitalService } from './hospital-service.model';
import { Doctor } from './doctor.model';
import { PatientRecord } from './patient-record.model';

export interface PatientSchedule {
  id?: string;
  createdAt: Date;
  dateBooking?: Date;
  time?: string;
  note?: string | null;
  active: boolean;
  room: string;
  healthStatus?: string;
  patientRecord: PatientRecord;
  doctor: Doctor;
  service: HospitalService;
}
