import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  cards = [
    { name: 'John Doe', 
      photo: 'user-1.jpg', 
      country: 'usa.png', 
      msg: 'Me pareció excelente, creo que el Discord está muy bien organizado y la iniciativa de NUWE es tremenda, gracias por la oportunidad, realmente lo disfruté.'
    },
    { name: 'Laurent Hinault', 
      photo: 'user-2.jpg', 
      country: 'france.png', 
      msg: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    { name: 'Jorge Diaz', 
      photo: 'user-3.jpg', 
      country: 'spain.png', 
      msg: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }

  ];
  currentCard:any;

  constructor() { }

  ngOnInit(): void {
    this.currentCard = this.cards[0];        
  }

  changeCard(num: number) {
    if((this.cards.indexOf(this.currentCard) + num) < 0) this.currentCard = this.cards[this.cards.length-1];
    else if((this.cards.indexOf(this.currentCard) + num) > this.cards.length-1) this.currentCard = this.cards[0];
    else this.currentCard = this.cards[this.cards.indexOf(this.currentCard) + num];
    
  }
}
