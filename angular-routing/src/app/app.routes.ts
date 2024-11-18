import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryItemComponent } from './components/grocery-item/grocery-item.component';

export const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  {
    path: 'groceries',
    component: GroceryListComponent,
  },
  {
    path: 'groceries/edit/:id',
    component: GroceryItemComponent,
  },
];
