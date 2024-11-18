import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GroceryService {
  private groceries = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Bananas' },
    { id: 3, name: 'Carrots' },
  ];

  getGroceries() {
    return of(this.groceries);
  }

  getGroceryById(id: number) {
    const grocery = this.groceries.find((item) => item.id === id);
    return of(grocery);
  }
}
