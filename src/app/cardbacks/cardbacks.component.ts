import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-cardbacks',
  templateUrl: './cardbacks.component.html',
  styleUrls: ['./cardbacks.component.scss']
})
export class CardbacksComponent implements OnInit {

  cardbacks: Object;

  constructor(private _config: ConfigService) {}


  ngOnInit(): void {

    this._config.getToken().subscribe(token => {
      this._config.getCardbacks(token['access_token']).subscribe( data => {
        this.cardbacks = data['cardBacks'];
      })
    });
  }

}
