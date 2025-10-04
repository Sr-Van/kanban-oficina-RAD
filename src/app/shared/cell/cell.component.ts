import { Component, input } from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.css',
})
export class CellComponent {
  public empty = input<boolean>(false);
  public title = input<string>();
  public description = input<string>();
  public employee = input<string>();
}
