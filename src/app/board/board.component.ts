import { Order } from './../shared/order.interface';
import { Component } from '@angular/core';
import { CellComponent } from '../shared/cell/cell.component';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent, CdkDropList, CdkDrag, CdkDropListGroup],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
})
export class BoardComponent {
  private mockData: Order[] = [
    {
      id: 1,
      title: 'Order 1',
      description: 'Description 1',
      employee: 'John Doe',
      status: 'To Do',
    },
    {
      id: 5,
      title: 'Order 5',
      description: 'Description 5',
      employee: 'almiron',
      status: 'To Do',
    },
    {
      id: 4,
      title: 'Order 4',
      description: 'Description 4',
      employee: 'Jnny',
      status: 'To Do',
    },
    {
      id: 2,
      title: 'Order 2',
      description: 'Description 2',
      employee: 'Jane Doe',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Order 3',
      description: 'Description 3',
      employee: 'John Doe',
      status: 'Done',
    },
  ];

  public toDoItems: Order[] = this.mockData.filter(
    (item) => item.status === 'To Do'
  );
  public inProgressItems: Order[] = this.mockData.filter(
    (item) => item.status === 'In Progress'
  );
  public doneItems: Order[] = this.mockData.filter(
    (item) => item.status === 'Done'
  );

  public drop(event: CdkDragDrop<Order[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log(event.currentIndex);
      console.log(event.previousIndex);
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
