import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GiraffItemComponent } from './comps/Giraff-admin/giraff-item/giraff-item.component';
import { GiraffDetailsComponent } from './comps/Giraff-admin/giraff-details/giraff-details.component';
import { GiraffPageComponent } from './comps/Giraff-admin/giraff-page/giraff-page.component';
import { GiraffLabelspanComponent } from './comps/Giraff-admin/giraff-label-span/giraff-label-span.component';

@NgModule({
  declarations: [
    AppComponent,
    GiraffItemComponent,
    GiraffDetailsComponent,
    GiraffPageComponent,
    GiraffLabelspanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
