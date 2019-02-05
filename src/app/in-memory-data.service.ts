import { InMemoryDbService } from "angular-in-memory-web-api";
import { JumpRun } from "./libs/common";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const jumpRuns = [
      {
        id: 1,
        name: "Jan 25",
        date: new Date('January 25, 2019'),
        orders: [
          {
            name: "Nitrogen Isotopes",
            buyPrice: 1000,
            sellPrice: 2000,
            quantity: 200
          },
          {
            name: "Hydrogen Isotopes",
            buyPrice: 600,
            sellPrice: 2000,
            quantity: 2000
          },
          {
            name: "Helium Isotopes",
            buyPrice: 300,
            sellPrice: 1000,
            quantity: 2450
          },
          {
            name: "Oxygen Isotopes",
            buyPrice: 1200,
            sellPrice: 1000,
            quantity: 2000
          }
        ]
      },
      {
        id: 2,
        name: "Jan 31",
        date: new Date('January 31, 2019'),
        orders: [
          {
            name: "Rail Gun T2",
            buyPrice: 1500000,
            sellPrice: 3000000,
            quantity: 180
          },
          {
            name: "Republic Fleet EMP",
            buyPrice: 300,
            sellPrice: 900,
            quantity: 200000
          }
        ]
      },
      {
        id: 3,
        name: "Feb 2",
        date: new Date('February 2, 2019'),
        orders: [
          {
            name: "Expanded Cargo Hold T2",
            buyPrice: 400000,
            sellPrice: 1000000,
            quantity: 100
          }
        ]
      },
      {
        id: 4,
        name: "Feb 4",
        date: new Date('February 4, 2019'),
      }
    ]
    return {jumpRuns};
  }

  genId(jumpRuns: JumpRun[]): number {
    return jumpRuns.length > 0 ? Math.max(...jumpRuns.map(run => run.id)) + 1: 11;
  }
}
