import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { Services } from './services/services';
import { Menu } from './menu/menu';
import { Contact } from './contact/contact';
import { Aboutus } from './aboutus/aboutus';

@NgModule({
  declarations: [
    App,
    Home,
    Navbar,
    Footer,
    Services,
    Menu,
    Contact,
    Aboutus
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
