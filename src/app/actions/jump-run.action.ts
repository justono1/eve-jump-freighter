import { Action } from "@ngrx/store";
import { JumpRunModel } from '../models/jump-run.model'

export enum ActionTypes {
    AddJumpRun = "[JUMP RUN] Add",
    RemoveJumpRun = "[JUMP RUN] Remove"
}

export class AddJumpRun implements Action {
    readonly type = ActionTypes.AddJumpRun;
    constructor(public paylod: JumpRunModel) {}
}

export class RemoveJumpRun implements Action {
    readonly type = ActionTypes.RemoveJumpRun;
    constructor(public paylod: string) {}
}

export type Actions = AddJumpRun | RemoveJumpRun