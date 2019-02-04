import { Component, OnInit, Input } from '@angular/core';
import { JumpRun } from "../libs/common";

@Component({
  selector: 'app-run-detail',
  templateUrl: './run-detail.component.html',
  styleUrls: ['./run-detail.component.scss']
})
export class RunDetailComponent implements OnInit {
  @Input() run: JumpRun;

  constructor() { }

  ngOnInit() {
  }

}
