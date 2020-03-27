import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { CardbacksComponent } from './cardbacks/cardbacks.component';
import { SetDetailComponent } from './set-detail/set-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardbacksComponent,
    SetDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
