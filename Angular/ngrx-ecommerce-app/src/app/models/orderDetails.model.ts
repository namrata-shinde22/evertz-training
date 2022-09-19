import { Product } from './product.model';

export interface OrderDetails {
  name: string;
  mobileNo: number;
  details: Product[];
}
