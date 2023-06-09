import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home/home-view/home-view.component';

const routes: Routes = [
  { path: 'login', component: MainPageComponent},
  { path: 'home', component: HomeViewComponent},
  { path: '', component: MainPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
