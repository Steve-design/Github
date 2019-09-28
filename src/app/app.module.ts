import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoryComponent } from './repository/repository.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchFormComponent,
    RepositoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
