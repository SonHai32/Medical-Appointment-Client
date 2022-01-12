import { Doctor } from './doctor.model';
import { PatientRecord } from './patient-record.model';
import { Service } from './service.model';

export interface PatientSchedule {
  id?: string;
  createdAt: Date;
  dateBooking?: Date;
  time?: number;
  note: string | null;
  active: boolean;
  healthStatu?: string;
  patientRecord: PatientRecord;
  doctor: Doctor;
  service: Service;
}
