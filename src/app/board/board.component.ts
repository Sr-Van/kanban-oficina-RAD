import { Order } from './../shared/order.interface';
import { Component } from '@angular/core';
import { CellComponent } from '../shared/cell/cell.component';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent],
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
}
