import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './todo';

@Pipe({
  name: 'taskstatus',
  pure: false
})
export class TaskstatusPipe implements PipeTransform {

  transform(value: Todo, ...args: unknown[]): unknown {
    if(value.completed) return "Task Completed";
    else return "Task Incomplete";
  }

}
