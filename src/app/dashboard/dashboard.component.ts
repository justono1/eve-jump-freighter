import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { v1 as uuid } from "uuid";

import { AppState } from "../app.state";
import { JumpRunModel } from '../models';
import * as JumpRunActions from '../actions/jump-run.action';
import { JumpRunService } from "../jump-run.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  selectedRun: JumpRunModel;
  runs: Observable<JumpRunModel[]>;

  constructor(
    private store: Store<AppState>,
    private jumpRunsService: JumpRunService
  ) { 
    this.runs = store.select('jumpRuns')
  }

  ngOnInit() {
    //this.getJumpRuns();
  }

  // getJumpRuns(): void {
  //   this.jumpRunsService.getJumpRuns()
  //     .subscribe(jumpRuns => this.runs = jumpRuns);
  // }

  add():void {
    this.store.dispatch(new JumpRunActions.AddJumpRun({
      id: uuid(),
      date: new Date()
    }))
  }

  delete(run: JumpRunModel): void {
    this.store.dispatch(new JumpRunActions.RemoveJumpRun(run.id));
  }

}
