export interface HospitalTime {
  id: number;
  dayOrder: number;
  dayName: string;
  startHour: number;
  startMinute: number;
  endHour: number;
  endMinute: number;
}

export const HospitalTimeData: HospitalTime[] = [
  {
    dayOrder: 1,
    dayName: 'Thứ 2',
    id: 1,
    startHour: 0o7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    dayOrder: 2,
    dayName: 'Thứ 3',
    id: 1,
    startHour: 0o7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    dayOrder: 3,
    dayName: 'Thứ 4',
    id: 1,
    startHour: 7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    dayOrder: 4,
    dayName: 'Thứ 5',
    id: 1,
    startHour: 7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    dayOrder: 5,
    dayName: 'Thứ 6',
    id: 1,
    startHour: 7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
  {
    dayOrder: 6,
    dayName: 'Thứ 7',
    id: 1,
    startHour: 7,
    startMinute: 0,
    endHour: 16,
    endMinute: 30,
  },
];
