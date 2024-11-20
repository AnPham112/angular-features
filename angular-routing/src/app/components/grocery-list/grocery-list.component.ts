import { Component, inject, input, OnInit } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent implements OnInit {
  groceryService = inject(GroceryService);
  groceryId = input('groceryId');
  categoryId = input('categoryId');
  groceries = toSignal(this.groceryService.getGroceries(), {
    initialValue: [],
  });

  ngOnInit(): void {
    // console.log('grocery signal id: ', this.groceryId());
    // console.log('category signal id: ', this.categoryId());
  }
}
