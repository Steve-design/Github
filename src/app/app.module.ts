import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoryComponent } from './repository/repository.component';
import { DatePipe } from './date.pipe';
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SearchFormComponent,
    RepositoryComponent,
    DatePipe,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
