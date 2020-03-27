import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardbacksComponent } from './cardbacks/cardbacks.component';


const routes: Routes = [
  { path: '', component: CardsComponent},
  { path: 'cardbacks', component: CardbacksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
