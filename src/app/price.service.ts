import { reduce } from "ramda";
import { Injectable } from '@angular/core';

import { JumpRun } from "./libs/common";

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  constructor() { }

  totalProfits(run:JumpRun):number {
    const calcProfits = (acc, item) => {
      return acc + ((item.sellPrice - item.buyPrice) * item.quantity);
    }
    const profit = reduce(calcProfits, 0, run.orders);
    if(run.fuelCost !== undefined) {
      return profit - run.fuelCost;
    } else {
      return profit;
    }
  }

  totalInvestment(run:JumpRun):number {
    const calcInvestment = (acc, item) => {
      return acc + item.buyPrice * item.quantity;
    }
    return reduce(calcInvestment, 0, run.orders);
  }
}
