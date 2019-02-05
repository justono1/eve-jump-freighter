import { reduce } from "ramda";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { JumpRunService } from "../jump-run.service";

import { JumpRun } from "../libs/common";

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.scss']
})
export class RunDetailComponent implements OnInit {
  run: JumpRun;
  profit: number = 0;
  investment: number = 0;

  constructor(
    private route: ActivatedRoute,
    private jumpRunService: JumpRunService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getJumpRun();
  }

  totalProfits(run:JumpRun):number {
    const calcProfits = (acc, item) => {
      return acc + ((item.sellPrice - item.buyPrice) * item.quantity);
    }
    return reduce(calcProfits, 0, run.orders);
  }

  totalInvestment(run:JumpRun):number {
    const calcInvestment = (acc, item) => {
      return acc + item.buyPrice * item.quantity;
    }
    return reduce(calcInvestment, 0, run.orders);
  }

  getJumpRun(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jumpRunService.getJumpRun(id)
      .subscribe(jumpRun => {
        this.run = jumpRun;
        if(jumpRun.orders) {
          this.profit = this.totalProfits(jumpRun);
          this.investment = this.totalInvestment(jumpRun);
        }
      })
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.jumpRunService.updateJumpRun(this.run)
      .subscribe(() => this.goBack());
  }

}
