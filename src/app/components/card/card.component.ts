import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  photo='';
  country='';
  name='';
  msg='';
  @Input('card') card: any;

  constructor() { }

  ngOnInit(): void {
    
  }
  ngOnChanges() {
    this.photo = this.card.photo;
    this.country = this.card.country;
    this.name = this.card.name;
    this.msg = this.card.msg;

  }

}
