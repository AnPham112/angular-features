import { Component, inject } from '@angular/core';
import { GroceryService } from '../../services/grocery.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { IGrocery } from '../../models/grocery.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grocery-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './grocery-list.component.html',
  styleUrl: './grocery-list.component.css',
})
export class GroceryListComponent {
  groceryService = inject(GroceryService);
  groceries = toSignal(this.groceryService.getGroceries(), {
    initialValue: [],
  });
}
