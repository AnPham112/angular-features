import { ErrorHandler, inject } from '@angular/core';
import { Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { ChildAComponent } from './components/child-a/child-a.component';
import { FirstComponent } from './components/first/first.component';
import { GroceryItemComponent } from './components/grocery-item/grocery-item.component';
import { GroceryListComponent } from './components/grocery-list/grocery-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HomeComponent } from './components/home/home.component';
import { ItemsComponent } from './components/items/items.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UserComponent } from './components/user/user.component';
import { hasPermissionGuard } from '../guards/hasPermission.guard';
import { canDeactivateUserProfile } from '../guards/deactivate.guard';
import { adminCanMatch } from '../guards/match.guard';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostResolver } from '../guards/resolve.guard';

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
    // if hasPermissionGuard is true, we can access child-a and child-b
    // if not, navigate to Not Found page
    // => check permission for both child-a and child-b
    // canActivateChild: [hasPermissionGuard],
    children: [
      {
        path: 'child-a',
        component: ChildAComponent,
        // title: 'childA',
        title: () => Promise.resolve('Child A'),
        // if hasPermissionGuard is true, we can access component child-a
        // if not, navigate to Not Found page
        // => do not check permission child-b
        canActivate: [hasPermissionGuard],
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
    path: 'posts',
    component: PostListComponent,
    // resolve: { posts: PostResolver },
    resolve: { products: PostResolver },
  },
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
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./components/user-profile/user-profile.component').then(
        ({ UserProfileComponent }) => UserProfileComponent
      ),
    canDeactivate: [canDeactivateUserProfile],
  },
  // nếu adminCanMatch là false thì sẽ vẫn sẽ giữ url hiện tại và show Not Found page
  { path: 'hero', component: HeroListComponent, canMatch: [adminCanMatch] },
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
