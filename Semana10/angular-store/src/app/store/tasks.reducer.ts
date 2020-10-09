import { Task } from '../tasks/task.model';
import * as TaskAction from './tasks.actions';

//estado inicial
const initialState: Task = {
  name: 'mi 1era tareita',
  state: 'Pendiente'
}

//switch dentro de una función pura que será nuestro reducer
export function taskReducer(state: Task[] = [initialState], action: TaskAction.Actions){
  switch(action.type){
    case TaskAction.ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}