import { Order } from "./order.model";

export interface JumpRunModel {
	id: string;
  date: Date;
  fuelCost?: number;
  orders?: Order[];
}