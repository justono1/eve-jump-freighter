import { Component, OnInit } from '@angular/core';
import { JumpRun } from '../libs/common';
import { JUMP_RUNS } from '../mock-jump-runs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedRun: JumpRun;
  runs = JUMP_RUNS;

  constructor() { }

  ngOnInit() {
  }

  onSelect(run: JumpRun): void {
    this.selectedRun = run;
  }

}
