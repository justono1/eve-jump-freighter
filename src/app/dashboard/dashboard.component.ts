import { Component, OnInit } from '@angular/core';
import { JumpRun } from '../libs/common';
import { JumpRunService } from "../jump-run.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedRun: JumpRun;
  runs: JumpRun[];

  constructor(
    private jumpRunsService: JumpRunService
  ) { }

  ngOnInit() {
    this.getJumpRuns();
  }

  getJumpRuns(): void {
    this.jumpRunsService.getJumpRuns()
      .subscribe(jumpRuns => this.runs = jumpRuns);
  }

  add():void {
    this.jumpRunsService.addJumpRun({
      date: new Date()
    } as JumpRun)
      .subscribe(run => {
        this.runs.push(run);
      })
  }

}
