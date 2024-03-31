import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotCompletedComponent } from './pages/not-completed/not-completed.component';
import { ByUserComponent } from './pages/by-user/by-user.component';
import { SearchComponent } from './pages/search/search.component';
import { DoneComponent } from './pages/done/done.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent,
    title: "All Tasks"
  },
  {
    path: 'done',
    component: DoneComponent,
    title: "Tasks Done"
  },
  {
    path: 'not-completed',
    component: NotCompletedComponent,
    title: "Tasks to-do"
  },
  {
    path: 'by-user',
    component: ByUserComponent,
    title: "User's Tasks"
  },
  {
    path:'search/:id',
    component: SearchComponent,
    title: "User Tasks"
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
