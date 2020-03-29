import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  sets: Object;

  constructor(private _config: ConfigService) { }

  ngOnInit(): void {
    this._config.getToken().subscribe(token => {
      this._config.getSets(token['access_token']).subscribe( data => {
        this.sets = data;
      })
    });
}
}
