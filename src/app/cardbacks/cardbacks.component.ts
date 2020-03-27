import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

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

    // const token = this._config.getToken().subscribe( data => {return data['access_token']});
    // console.log(token);
    // this._config.getCardbacks().subscribe(data => {
    //   console.log(data);
    // })
    this._config.getCardbacks().subscribe(data => console.log(data));

  }

}
