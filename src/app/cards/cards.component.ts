import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  info: Object;
  sets: [];
  accessToken: string = '';

  constructor(private _config: ConfigService) { }

  ngOnInit(): void {
    this._config.getInfo().subscribe(data => {
      this.info = data;
      this.sets = this.info['standard'];
    })
  }

}
