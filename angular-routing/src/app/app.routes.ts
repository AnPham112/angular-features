import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryItemComponent } from './components/grocery-item/grocery-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { ErrorHandler, inject } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/first-component', pathMatch: 'full' },
  { path: 'first-component', component: FirstComponent },
  { path: 'second-component', component: SecondComponent },
  { path: 'user/:userId', component: UserComponent },
  {
    path: 'old-user-page',
    redirectTo: ({ queryParams }) => {
      const errorHandler = inject(ErrorHandler);
      const userId = queryParams['userId'];
      if (userId) {
        return `/user/${userId}`;
      } else {
        errorHandler.handleError(
          new Error('Attempted navigation to user page without user ID.')
        );
        return '/not-found';
      }
    },
  },
  {
    path: 'groceries/:categoryId',
    component: GroceryListComponent,
    children: [{ path: 'details/:groceryId', component: GroceryItemComponent }],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
