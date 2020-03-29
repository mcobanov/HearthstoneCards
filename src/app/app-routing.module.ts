import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { CardbacksComponent } from './cardbacks/cardbacks.component';
import { SetDetailComponent } from './set-detail/set-detail.component';


const routes: Routes = [
  { path: '', 
  component: CardsComponent,
  // children: [
  //   {path: ':cardSet', component: SetDetailComponent}
  // ]
},
  { path: 'cardbacks', component: CardbacksComponent },
  {path: ':cardSet', component: SetDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
