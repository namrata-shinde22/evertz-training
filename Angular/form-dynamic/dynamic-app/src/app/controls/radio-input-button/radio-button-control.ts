import { ControlBase } from '../control-base';

export interface RadioControl extends ControlBase {
  options?: { value: string; label: string }[];
}