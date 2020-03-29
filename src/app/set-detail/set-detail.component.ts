import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-set-detail',
  templateUrl: './set-detail.component.html',
  styleUrls: ['./set-detail.component.scss']
})
export class SetDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private _config: ConfigService) { }

  cardSet: string;
  cards: Object;

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      this.cardSet = params['cardSet'];
    });

    this._config.getToken().subscribe(token => {
      this._config.getCards(this.cardSet, token['access_token']).subscribe( data => {
        this.cards = data['cards'];
      })
    });
  }

}
