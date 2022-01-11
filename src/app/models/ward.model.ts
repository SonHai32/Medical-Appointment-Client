import { District } from './district.model';

export interface Ward {
  id: string;
  name: string;
  district: District;
}
