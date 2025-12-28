import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Menu } from './menu/menu';
import { Services } from './services/services';
import { Contact } from './contact/contact';


const routes: Routes = [
  {
    path: "",
    component : Home
  } ,
  {
    path : "Menu",
    component : Menu
  },
  {
    path : "Services",
    component : Services
  },
  {
    path : "Contact",
    component : Contact
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
