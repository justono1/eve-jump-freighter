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

  constructor(
    private route: ActivatedRoute,
    private jumpRunService: JumpRunService,
    private location: Location
  ) { }

  ngOnInit():void {
    this.getJumpRun();
  }

  getJumpRun(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jumpRunService.getJumpRun(id)
      .subscribe(jumpRun => this.run = jumpRun);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.jumpRunService.updateJumpRun(this.run)
      .subscribe(() => this.goBack());
  }

}
