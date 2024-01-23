import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import { CustomerComponent } from './components/customer/customer.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import {AvatarModule} from "primeng/avatar";

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    MenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    AvatarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
