import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { BoldPipe } from './bold.pipe';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    SearchFormComponent,
    BoldPipe,
    HoverDirective
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
