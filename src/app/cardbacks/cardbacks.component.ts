import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-cardbacks',
  templateUrl: './cardbacks.component.html',
  styleUrls: ['./cardbacks.component.scss']
})
export class CardbacksComponent implements OnInit {

  cardbacks: Object;
  token: string;

  constructor(private _config: ConfigService) {}


  ngOnInit(): void {

    this._config.getToken().subscribe(val => {
      this._config.getCardbacks(val).subscribe( data => {
        this.cardbacks = data['cardBacks'];
        console.log(this.cardbacks);
      })
    });

    // const token = this._config.getToken().subscribe( data => {return data['access_token']});
    // console.log(token);
    // this._config.getCardbacks().subscribe(data => {
    //   console.log(data);
    // })

  }

}
