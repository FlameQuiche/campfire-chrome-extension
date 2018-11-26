import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

import { CategoryComponent }       from './category/category.component';
import { BookmarksComponent }       from './bookmarks/bookmarks.component';
import { LoginComponent }       from './login/login.component';
import { LogoutComponent }       from './logout/logout.component';

const routes: Routes = [
  { path: '', component: BookmarksComponent, canActivate: [AuthGuard] },
  { path: 'home', component: BookmarksComponent, canActivate: [AuthGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard],
    children: [
      { path: 'bookmarks', component: BookmarksComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
