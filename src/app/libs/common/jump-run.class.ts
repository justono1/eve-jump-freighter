import { OrderData } from "./order-data.class";

export interface JumpRun {
  id: number;
  name: string;
  date: Date;
  fuelCost?: number;
  orders?: OrderData[];
}