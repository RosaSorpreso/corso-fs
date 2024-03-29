import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NotCompletedComponent } from './pages/not-completed/not-completed.component';
import { ByUserComponent } from './pages/by-user/by-user.component';
import { HeaderComponent } from './main-components/header/header.component';
import { SearchComponent } from './pages/search/search.component';
import { DoneComponent } from './pages/done/done.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NotCompletedComponent,
    ByUserComponent,
    HeaderComponent,
    SearchComponent,
    DoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
