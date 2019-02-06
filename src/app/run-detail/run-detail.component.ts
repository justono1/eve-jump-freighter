import { without } from 'ramda'
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { JumpRunService } from "../jump-run.service";
import { PriceService } from "../price.service";

import { JumpRun, OrderData } from "../libs/common";

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.scss']
})
export class RunDetailComponent implements OnInit {
  run: JumpRun;
  profit: number = 0;
  investment: number = 0;
  selectedOrders:OrderData[] = [];
  newOrder: OrderData = {
    name: '',
    buyPrice: null,
    sellPrice: null,
    quantity: null
  };

  constructor(
    private route: ActivatedRoute,
    private jumpRunService: JumpRunService,
    private location: Location,
    private priceService: PriceService
  ) { }

  ngOnInit(): void {
    this.getJumpRun();
  }

  multiSelect(order: OrderData) {
    if(this.selectedOrders.find(x=>x==order)) {
      this.selectedOrders.splice(this.selectedOrders.indexOf(order),1)
    } else {
      this.selectedOrders.push(order);
    }
  }

  deleteSelected():void {
    this.run.orders = without(this.selectedOrders, this.run.orders);
    this.updatePrice(this.run);
  }

  updatePrice(run:JumpRun):void {
    this.profit = this.priceService.totalProfits(run),
    this.investment = this.priceService.totalInvestment(run)
  }

  getJumpRun(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jumpRunService.getJumpRun(id)
      .subscribe(jumpRun => {
        this.run = jumpRun;
        if(jumpRun.orders) {
          this.updatePrice(jumpRun);
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

  @ViewChild("name") nameField: ElementRef;
  addOrder(): void {
    if(this.run.orders === undefined) {
      this.run.orders = [];
    }
    this.run.orders.push(this.newOrder);
    this.updatePrice(this.run);
    this.newOrder = {
      name: '',
      buyPrice: null,
      sellPrice: null,
      quantity: null
    }
    this.nameField.nativeElement.focus();
  }

}
