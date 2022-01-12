export default interface PatientRelative {
  id?: string;
  fullname: string;
  phoneNumber: string;
  address: string;
  relationship: string;
  emailAddress?: string;
  note?: string;
}
