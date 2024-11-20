import { Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { GroceryItemComponent } from './components/grocery-item/grocery-item.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { ErrorHandler, inject } from '@angular/core';
import { ChildAComponent } from './components/child-a/child-a.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from '../guards/auth.guard';
import { LoginComponent } from './components/login/login.component';

// title do not change when navigate to other pages without title
// const resolvesChildATitle = () => {
//   return Promise.resolve('Child A - Dynamic title');
// };

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'first-component',
    title: 'First Component',
    component: FirstComponent,
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
        // title: 'childA',
        title: () => Promise.resolve('Child A'),
      },
      {
        path: 'child-b',
        loadComponent: () =>
          import('./components/child-b/child-b.component').then(
            ({ ChildBComponent }) => ChildBComponent
          ),
      },
    ],
  },
  {
    path: 'second-component',
    loadComponent: () =>
      import('./components/second/second.component').then(
        ({ SecondComponent }) => SecondComponent
      ),
  },
  { path: 'home', component: HomeComponent },
  { path: 'home/items', component: ItemsComponent },
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(
        ({ LoginComponent }) => LoginComponent
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        ({ DashboardComponent }) => DashboardComponent
      ),
    canActivate: [authGuard],
  },
  { path: 'hero', component: HeroListComponent },
  { path: 'herodetail', component: HeroDetailComponent },
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
