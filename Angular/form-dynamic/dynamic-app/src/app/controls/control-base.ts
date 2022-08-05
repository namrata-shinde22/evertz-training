export interface ControlBase {
  key: string;
  required?: boolean;
  order: number;
  controlType: string;
  type: string;
  value: string;
  addressline: string;
  city: string;
  state: string;
  pincode: string;
}
