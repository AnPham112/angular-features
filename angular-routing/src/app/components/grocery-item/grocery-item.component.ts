import { NgIf } from '@angular/common';
import { Component, inject, input, OnInit } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { GroceryService } from '../../services/grocery.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-grocery-item',
  standalone: true,
  imports: [NgIf],
  templateUrl: './grocery-item.component.html',
  styleUrl: './grocery-item.component.css',
})
export class GroceryItemComponent implements OnInit {
  categoryId = input('categoryId');
  groceryId = input('groceryId');
  groceryService = inject(GroceryService);
  grocery = toSignal(
    toObservable(this.groceryId).pipe(
      switchMap((id) => this.groceryService.getGroceryById(+id))
    )
  );

  ngOnInit() {
    console.log('categoryId: ', this.categoryId());
    console.log('groceryId: ', this.groceryId());
  }
}
