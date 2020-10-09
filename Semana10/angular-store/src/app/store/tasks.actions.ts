import { Action } from '@ngrx/store';
import { Task } from '../tasks/task.model';

//defniniendo el tipo de acción
export const ADD_TASK = 'Add task';

//Creacion del action
export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public payload: Task){}
}

//exportamos la accion
export type Actions = AddTask;