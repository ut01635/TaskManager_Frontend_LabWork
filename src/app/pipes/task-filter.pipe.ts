import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../Models/task';

@Pipe({
  name: 'taskFilter'
})
export class TaskFilterPipe implements PipeTransform {

  transform(value: Task[], ...args: string[]): Task[] {
      let SearchText  = args[0].toLowerCase()

      return value.filter(a => a.title.toLowerCase().includes(SearchText) || a.description.toLowerCase().includes(SearchText))

  }

}
