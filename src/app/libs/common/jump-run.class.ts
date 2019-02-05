import { OrderData } from "./order-data.class";

export interface JumpRun {
  id: number;
  date: Date;
  fuelCost?: number;
  orders?: OrderData[];
}