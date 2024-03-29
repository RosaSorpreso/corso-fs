import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotCompletedComponent } from './pages/not-completed/not-completed.component';
import { ByUserComponent } from './pages/by-user/by-user.component';
import { SearchComponent } from './pages/search/search.component';
import { DoneComponent } from './pages/done/done.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path: 'done',
    component: DoneComponent
  },
  {
    path: 'not-completed',
    component: NotCompletedComponent
  },
  {
    path: 'by-user',
    component: ByUserComponent
  },
  {
    path:'search/:id',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
