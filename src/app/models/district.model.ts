import { Province } from "./province.model";

export interface District {
  id: string;

  name: string;

  province: Province;
}
