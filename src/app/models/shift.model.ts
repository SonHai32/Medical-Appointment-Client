import { Doctor } from './doctor.model';
import { Room } from './room.model';

export interface Shift {
  id: string;
  name: string;
  startAt: Date;
  endAt: Date;
  date: Date;
  active: Boolean;
  room: Room;
  doctor: Doctor;
}
