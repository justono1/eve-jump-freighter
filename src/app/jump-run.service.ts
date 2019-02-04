import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";

import { MessageService } from "./message.service";

import { JumpRun } from "./libs/common";
import { JUMP_RUNS } from "./mock-jump-runs";

@Injectable({
  providedIn: 'root'
})
export class JumpRunService {

  constructor(
    private messageService: MessageService
  ) { }

  getJumpRuns(): Observable<JumpRun[]> {
    this.messageService.add("JumpRunsService: fetched Jump Runs");
    return of(JUMP_RUNS);
  }
}
