import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { UserDisplayComponent } from './user-display/user-display.component';

const routes: Routes = [

  { path: 'search', component: SearchFormComponent},
  { path: 'display/:name', component: UserDisplayComponent },
  { path: '', redirectTo:"/search", pathMatch:"full"},
// {path:'User/:id'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
