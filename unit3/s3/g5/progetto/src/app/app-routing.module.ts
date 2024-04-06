import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'homepage',
    loadChildren: () => import('./pages/homepage/homepage.module').then(m => m.HomepageModule)
  },
  { path: 'users',
    loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)
  },
  { path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)
  },
  { path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
