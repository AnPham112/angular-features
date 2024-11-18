import { AsyncPipe, NgIf } from '@angular/common';
import { Component, inject, Input, numberAttribute } from '@angular/core';
import { Observable } from 'rxjs';
import { GroceryService } from '../../services/grocery.service';

@Component({
  selector: 'app-grocery-item',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css',
})
export class GroceryItemComponent {
  groceryService = inject(GroceryService);
  grocery$!: Observable<any>;
  grocery: any;
  @Input({ transform: numberAttribute }) set id(groceryId: number) {
    this.grocery$ = this.groceryService.getGroceryById(groceryId);
  }
}
